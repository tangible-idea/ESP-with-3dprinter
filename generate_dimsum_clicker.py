# -*- coding: utf-8 -*-
"""
딤섬 찜기 클리커 3D 모델 생성기
- 1층: 520mAh 배터리 수납
- 2층: 충전모듈 + ESP32-C3 supermini + 0.49" OLED 소켓 + USB-C 구멍
- 3층: 키보드 스위치 스탠드 장착용 상판 (뚜껑)

실행: python3 generate_dimsum_clicker.py
출력: output_stl/floor1_battery.stl, floor2_esp32.stl, floor3_switch_lid.stl
"""
import numpy as np
import trimesh
from trimesh.creation import extrude_polygon, cylinder, torus
from shapely.geometry import box as shp_box
from shapely.geometry import Point

# ============================================================
# 공통 파라미터 (mm)
# ============================================================
OUTER_R = 27.0        # 외경 54mm
WALL = 2.5            # 벽 두께
INNER_R = OUTER_R - WALL  # 내경 반지름 24.5

# 찜기 스택 결합: 아래층 상단 수(lip) 링 / 위층 바닥 홈(groove)
LIP_R_IN, LIP_R_OUT, LIP_H = 24.6, 25.6, 1.5
GRV_R_IN, GRV_R_OUT, GRV_D = 24.4, 25.8, 1.8

SEG = 160  # 원 세그먼트 수


def rounded_rect(w, h, r, cx=0.0, cy=0.0):
    """모서리 반경 r의 둥근 사각형 shapely 폴리곤"""
    b = shp_box(cx - w / 2 + r, cy - h / 2 + r, cx + w / 2 - r, cy + h / 2 - r)
    return b.buffer(r, join_style=1, quad_segs=16)


def rect(w, h, cx=0.0, cy=0.0):
    return shp_box(cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2)


def tube(r_out, r_in, height, z0=0.0):
    """중공 실린더 (링)"""
    ring = Point(0, 0).buffer(r_out, quad_segs=SEG // 4).difference(
        Point(0, 0).buffer(r_in, quad_segs=SEG // 4))
    m = extrude_polygon(ring, height)
    m.apply_translation([0, 0, z0])
    return m


def disc(r, height, z0=0.0):
    m = extrude_polygon(Point(0, 0).buffer(r, quad_segs=SEG // 4), height)
    m.apply_translation([0, 0, z0])
    return m


def prism(poly, height, z0=0.0):
    m = extrude_polygon(poly, height)
    m.apply_translation([0, 0, z0])
    return m


def groove_rings(mesh, z_list):
    """대나무 찜기 느낌의 가로 홈 (외벽 장식)"""
    for z in z_list:
        t = torus(major_radius=OUTER_R, minor_radius=0.6,
                  major_sections=SEG, minor_sections=24)
        t.apply_translation([0, 0, z])
        mesh = mesh.difference(t)
    return mesh


def bottom_groove(mesh):
    """위층 바닥에 파는 결합 홈 (아래층 lip이 들어감)"""
    g = tube(GRV_R_OUT, GRV_R_IN, GRV_D, z0=-0.05)
    return mesh.difference(g)


def top_lip(z_top):
    """층 상단의 결합 링(수)"""
    return tube(LIP_R_OUT, LIP_R_IN, LIP_H, z0=z_top)


# ============================================================
# 1층: 배터리 (36.5 x 28.5 x 4.3)
# ============================================================
def build_floor1():
    PLATE = 2.0        # 바닥판
    PLATFORM = 1.5     # 배터리 포켓 플랫폼
    WALL_TOP = 10.0    # 벽 상단 (lip 제외)
    BAT_W, BAT_D = 36.5, 28.5
    CLR = 0.5          # 포켓 여유

    body = disc(OUTER_R, PLATE)                      # 바닥판
    body = body.union(tube(OUTER_R, INNER_R, WALL_TOP - PLATE, z0=PLATE))  # 벽
    body = body.union(top_lip(WALL_TOP))             # 상단 결합 링

    # 배터리 포켓 플랫폼
    platform = disc(INNER_R, PLATFORM, z0=PLATE)
    pocket = prism(rounded_rect(BAT_W + CLR, BAT_D + CLR, 2.0),
                   PLATFORM + 0.1, z0=PLATE)
    platform = platform.difference(pocket)
    body = body.union(platform)

    body = groove_rings(body, [4.0, 7.0])
    return body


# ============================================================
# 2층: ESP32 + 충전모듈 + OLED 소켓 + USB-C 구멍
# ============================================================
def build_floor2():
    PLATE = 2.5        # 바닥판 (밑면에 결합 홈)
    PLATFORM_TOP = 4.7 # 포켓 플랫폼 상면 (포켓 깊이 2.2)
    WALL_TOP = 22.0
    CLR = 0.4

    # 부품 배치 (중심 좌표)
    ESP_C = (-9.4, 0.0)     # ESP32 24 x 18, USB는 -X(서쪽) 방향
    MOD_C = (13.9, 0.0)     # 충전모듈 19 x 14, USB는 +X(동쪽) → 벽 구멍
    MOD_USB_Z = PLATE + 2.9 # 모듈 PCB 바닥 기준 USB 중심 높이 2.9

    body = disc(OUTER_R, PLATE)
    body = body.union(tube(OUTER_R, INNER_R, WALL_TOP - PLATE, z0=PLATE))
    body = body.union(top_lip(WALL_TOP))

    # ---- 포켓 플랫폼 ----
    platform = disc(INNER_R, PLATFORM_TOP - PLATE, z0=PLATE)
    esp_pocket = prism(rounded_rect(24 + CLR, 18 + CLR, 1.5,
                                    ESP_C[0], ESP_C[1]), 3.0, z0=PLATE)
    mod_pocket = prism(rounded_rect(19 + CLR, 14 + CLR, 1.5,
                                    MOD_C[0], MOD_C[1]), 3.0, z0=PLATE)
    platform = platform.difference(esp_pocket).difference(mod_pocket)
    body = body.union(platform)
    # (union 후 다시 빼서 플랫폼-벽 겹침 부분도 포켓 확보)
    body = body.difference(esp_pocket).difference(mod_pocket)

    # ---- OLED 소켓 (북쪽 +Y 벽) : 15 x 16 x 2.4 세로 삽입 ----
    OLED_W, OLED_T = 15.0, 2.4
    boss = prism(rect(20, 6.0, 0, 21.75), WALL_TOP - PLATE, z0=PLATE)
    boss = boss.intersection(disc(INNER_R + 0.01, WALL_TOP - PLATE, z0=PLATE))
    body = body.union(boss)
    # 세로 슬롯 (위에서 밀어넣기, 바닥 턱 z=6.7)
    slot = prism(rect(OLED_W + 0.5, OLED_T + 0.3, 0, 21.65),
                 WALL_TOP - 6.7 + 0.1, z0=6.7)
    body = body.difference(slot)
    # 슬롯 아래 배선 통로 (OLED 핀이 내부로 빠지는 구멍)
    wire_gap = prism(rect(11.0, OLED_T + 0.3, 0, 21.65), 6.7 - PLATE + 0.1,
                     z0=PLATE)
    body = body.difference(wire_gap)
    # 디스플레이 창 (외벽 관통, 둥근 사각형)
    win = extrude_polygon(rounded_rect(13.5, 8.0, 1.5), 8.0)  # XY로 만든 후 회전
    win.apply_transform(trimesh.transformations.rotation_matrix(
        -np.pi / 2, [1, 0, 0]))       # +Y 방향으로 관통하도록
    win.apply_translation([0, 21.5, 13.0])  # y 21.5→29.5 관통, 창 중심 z=13
    body = body.difference(win)

    # ---- USB-C 구멍 (동쪽 +X 벽, usb_c_hole.stl 사용) ----
    usb = trimesh.load('stl_files/usb_c_hole.stl', force='mesh')
    usb.apply_translation(-usb.bounds[0])          # 0..(9, 10, 4.64)
    usb.apply_translation([-4.5, -5.0, -2.32])     # 중심 정렬
    usb.apply_transform(trimesh.transformations.rotation_matrix(
        np.pi, [0, 0, 1]))                         # 나팔 입구를 +X로
    # 나팔 입구 world x=28.5, 조임부가 벽 안쪽을 관통
    usb.apply_translation([24.0, MOD_C[1], MOD_USB_Z])
    body = body.difference(usb)

    # ---- 배터리 배선 구멍 (1층 천장 = 2층 바닥판 관통) ----
    wire = prism(rounded_rect(9.0, 5.0, 2.0, 0.0, -13.5), PLATFORM_TOP + 0.2,
                 z0=-0.1)
    body = body.difference(wire)

    body = bottom_groove(body)
    body = groove_rings(body, [8.0, 15.0])
    return body


# ============================================================
# 3층: 키보드 스위치 스탠드 장착 뚜껑
# ============================================================
def build_floor3():
    WALL_TOP = 12.0
    PLATE_T = 3.2
    PLATE_Z0 = WALL_TOP - PLATE_T   # 8.8

    # keyboard_switch_stand.stl 바닥 결합부 (중심 정렬 기준 실측):
    #  - 중앙 기둥 5.3x5.3 (아래로 2.7 돌출, 테이퍼로 최대 6.4)
    #  - 다리 2x2 @ (3.15, 5.10), (-3.85, 3.41)  (길이 5.4)
    PRONG_A = (3.15, 5.10)
    PRONG_B = (-3.85, 3.41)

    body = tube(OUTER_R, INNER_R, WALL_TOP)                 # 벽 (바닥판 없음)
    body = body.union(prism(Point(0, 0).buffer(INNER_R + 0.1, quad_segs=40),
                            PLATE_T, z0=PLATE_Z0))          # 상판
    body = body.intersection(disc(OUTER_R, WALL_TOP))       # 외경 정리

    # 스탠드 안착 얕은 홈 (플레어 바닥 14.3 x 14.74)
    seat = prism(rounded_rect(14.9, 15.3, 1.0), 0.7, z0=WALL_TOP - 0.6)
    body = body.difference(seat)

    # 중앙 기둥 + 배선 통로 구멍 (관통)
    center_hole = prism(rounded_rect(7.0, 7.0, 0.8), PLATE_T + 1.5,
                        z0=PLATE_Z0 - 0.8)
    body = body.difference(center_hole)

    # 다리 구멍 2개 (관통, 다리 2.0 → 구멍 2.3)
    for px, py in (PRONG_A, PRONG_B):
        h = prism(rect(2.3, 2.3, px, py), PLATE_T + 1.5, z0=PLATE_Z0 - 0.8)
        body = body.difference(h)

    body = bottom_groove(body)
    body = groove_rings(body, [4.0, 7.0])
    return body


# ============================================================
if __name__ == '__main__':
    import os
    os.makedirs('output_stl', exist_ok=True)

    print('1층 (배터리) 생성 중...')
    f1 = build_floor1()
    f1.export('output_stl/floor1_battery.stl')
    print('  watertight:', f1.is_watertight, ' size:', np.round(f1.extents, 2))

    print('2층 (ESP32/충전모듈/OLED/USB) 생성 중...')
    f2 = build_floor2()
    f2.export('output_stl/floor2_esp32.stl')
    print('  watertight:', f2.is_watertight, ' size:', np.round(f2.extents, 2))

    print('3층 (스위치 뚜껑) 생성 중...')
    f3 = build_floor3()
    f3.export('output_stl/floor3_switch_lid.stl')
    print('  watertight:', f3.is_watertight, ' size:', np.round(f3.extents, 2))

    # 조립 미리보기용 (참고)
    asm = f1.copy()
    f2a = f2.copy(); f2a.apply_translation([0, 0, 10.0]); asm = asm + f2a
    f3a = f3.copy(); f3a.apply_translation([0, 0, 32.0]); asm = asm + f3a
    asm.export('output_stl/assembly_preview.stl')
    print('완료! output_stl/ 폴더 확인')
