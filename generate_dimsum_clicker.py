# -*- coding: utf-8 -*-
"""
딤섬 찜기 클리커 3D 모델 생성기 (네모 + 둥근 모서리 버전)
- 1층: 520mAh 배터리 (낮게, 빡빡하게)
- 2층: 충전모듈 + ESP32-C3 supermini + 0.49" OLED 소켓 + USB-C 구멍
- 3층: 키보드 스위치 스탠드 장착 뚜껑

결합 방식: 아래층 상단 안쪽 턱(ridge) 위로 위층 벽 스커트가 덮이는 rabbet 방식
(스크린샷 참고 — 겉면은 플러시하게 맞음)

실행: python3 generate_dimsum_clicker.py
출력: output_stl/floor1_battery.stl, floor2_esp32.stl, floor3_switch_lid.stl
"""
import numpy as np
import trimesh
from trimesh.creation import extrude_polygon
from shapely.geometry import box as shp_box

# ============================================================
# 공통 파라미터 (mm)
# ============================================================
OUT_W, OUT_D = 44.0, 39.0   # 외형 footprint
OUT_R = 8.0                 # 외형 모서리 반경 (귀엽게)
WALL = 2.3                  # 벽 두께  → 내부 39.4 x 34.4, 모서리 r5.7

# rabbet 결합: 아래층 턱(ridge) / 위층 바닥 안쪽 단차
RIDGE_IN, RIDGE_OUT, RIDGE_H = 2.1, 0.9, 1.5   # 외형 기준 inset 거리
RABBET_OUT, RABBET_D = 0.7, 1.8                # 위층: inset 0.7부터 안쪽 전부 제거


def rounded_rect(w, h, r, cx=0.0, cy=0.0):
    b = shp_box(cx - w / 2 + r, cy - h / 2 + r, cx + w / 2 - r, cy + h / 2 - r)
    return b.buffer(r, join_style=1, quad_segs=24)


def rect(w, h, cx=0.0, cy=0.0):
    return shp_box(cx - w / 2, cy - h / 2, cx + w / 2, cy + h / 2)


BASE = rounded_rect(OUT_W, OUT_D, OUT_R)


def inset(d):
    return BASE.buffer(-d, join_style=1, quad_segs=24)


def prism(poly, height, z0=0.0):
    m = extrude_polygon(poly, height)
    m.apply_translation([0, 0, z0])
    return m


def wall_tube(height, z0=0.0):
    return prism(BASE.difference(inset(WALL)), height, z0)


def top_ridge(z_top):
    """아래층 상단 안쪽 턱 (위층이 이 위에 얹힘)"""
    return prism(inset(RIDGE_OUT).difference(inset(RIDGE_IN)), RIDGE_H, z_top)


def bottom_rabbet(mesh):
    """위층 바닥 안쪽 단차 (아래층 ridge가 들어옴)"""
    cut = prism(inset(RABBET_OUT).difference(inset(WALL + 0.6)),
                RABBET_D + 0.05, z0=-0.05)
    return mesh.difference(cut)


def deco_bands(mesh, z_list, depth=0.6, band_h=1.2):
    """대나무 찜기 느낌 가로 홈 장식"""
    ring = BASE.buffer(0.05).difference(inset(depth))
    for z in z_list:
        mesh = mesh.difference(prism(ring, band_h, z0=z - band_h / 2))
    return mesh


# ============================================================
# 1층: 배터리 (36.5 x 28.5 x 4.3) — 낮고 빡빡하게
# ============================================================
def build_floor1():
    PLATE = 1.6
    RIM_H = 1.2          # 배터리 위치 고정용 얇은 테두리
    WALL_TOP = 7.5       # 내부 유효높이 5.9 (배터리 4.3 + 배선 1.6)

    body = prism(BASE, PLATE)
    body = body.union(wall_tube(WALL_TOP - PLATE, z0=PLATE))
    body = body.union(top_ridge(WALL_TOP))

    # 배터리 포켓 테두리 (37.2 x 29.2)
    rim = prism(inset(WALL), RIM_H, z0=PLATE)
    rim = rim.difference(prism(rounded_rect(37.2, 29.2, 2.0), RIM_H + 0.2,
                               z0=PLATE - 0.1))
    body = body.union(rim)

    body = deco_bands(body, [4.2])
    return body


# ============================================================
# 2층: ESP32 + 충전모듈 + OLED 소켓 + USB-C 구멍
# ============================================================
def build_floor2():
    PLATE = 2.0
    PLATFORM_H = 2.2     # 포켓 깊이
    WALL_TOP = 20.5
    CLR = 0.4

    # 부품 배치 (중심 좌표) — 내부 x ±19.7, y ±17.2
    ESP_C = (-10.0, 0.0)   # ESP32 세로 배치: 18(x) x 24(y)
    MOD_C = (10.0, 0.0)    # 충전모듈 19(x) x 14(y), USB가 +X 동쪽 벽
    MOD_USB_Z = PLATE + 2.9

    body = prism(BASE, PLATE)
    body = body.union(wall_tube(WALL_TOP - PLATE, z0=PLATE))
    body = body.union(top_ridge(WALL_TOP))

    # ---- 포켓 플랫폼 ----
    platform = prism(inset(WALL), PLATFORM_H, z0=PLATE)
    esp_pocket = prism(rounded_rect(18 + CLR, 24 + CLR, 1.5, *ESP_C),
                       PLATFORM_H + 1.0, z0=PLATE)
    mod_pocket = prism(rounded_rect(19 + CLR, 14 + CLR, 1.5, *MOD_C),
                       PLATFORM_H + 1.0, z0=PLATE)
    platform = platform.difference(esp_pocket).difference(mod_pocket)
    body = body.union(platform)
    body = body.difference(esp_pocket).difference(mod_pocket)

    # ---- OLED 소켓 (북쪽 +Y 벽): 15 x 16 x 2.4 위에서 세로 삽입 ----
    OLED_T = 2.4
    boss = prism(rect(18, 4.4, 0, 15.1), WALL_TOP - PLATE, z0=PLATE)
    boss = boss.intersection(prism(inset(WALL - 0.01), WALL_TOP, z0=0))
    body = body.union(boss)
    slot = prism(rect(15.5, OLED_T + 0.3, 0, 15.95), WALL_TOP, z0=4.2)
    body = body.difference(slot)
    # 슬롯 아래 OLED 핀 배선 통로
    body = body.difference(prism(rect(11.0, OLED_T + 0.3, 0, 15.95),
                                 4.2 - PLATE + 0.1, z0=PLATE))
    # 디스플레이 창 (북쪽 외벽 관통)
    win = extrude_polygon(rounded_rect(13.5, 8.0, 1.5), 8.0)
    win.apply_transform(trimesh.transformations.rotation_matrix(
        -np.pi / 2, [1, 0, 0]))
    win.apply_translation([0, 15.5, 12.0])   # y 15.5→23.5 관통, 창 중심 z=12
    body = body.difference(win)

    # ---- USB-C 구멍 (동쪽 +X 벽, usb_c_hole.stl / 나팔부 60% 압축) ----
    usb = trimesh.load('stl_files/usb_c_hole.stl', force='mesh')
    usb.apply_translation(-usb.bounds[0])
    usb.apply_scale([0.6, 1.0, 1.0])               # 길이 9 → 5.4
    usb.apply_translation([-2.7, -5.0, -2.32])     # 중심 정렬 (나팔 입구 -x)
    usb.apply_transform(trimesh.transformations.rotation_matrix(
        np.pi, [0, 0, 1]))                         # 나팔 입구를 +X로
    usb.apply_translation([19.7, MOD_C[1], MOD_USB_Z])  # 입구 x=22.4
    body = body.difference(usb)

    # ---- 배터리 배선 구멍 (1층 천장 = 2층 바닥판 관통) ----
    wire = prism(rounded_rect(8.0, 4.0, 1.5, 4.0, -12.5),
                 PLATE + PLATFORM_H + 0.4, z0=-0.1)
    body = body.difference(wire)

    body = bottom_rabbet(body)
    body = deco_bands(body, [6.5, 13.5])
    return body


# ============================================================
# 3층: 키보드 스위치 스탠드 장착 뚜껑
# ============================================================
def build_floor3():
    WALL_TOP = 10.0
    PLATE_T = 3.2
    PLATE_Z0 = WALL_TOP - PLATE_T   # 6.8

    # keyboard_switch_stand.stl 바닥 결합부 (중심 정렬 실측):
    #  중앙 기둥 5.3x5.3 / 다리 2x2 @ (3.15, 5.10), (-3.85, 3.41)
    PRONG_A = (3.15, 5.10)
    PRONG_B = (-3.85, 3.41)

    body = wall_tube(WALL_TOP)
    body = body.union(prism(inset(WALL - 0.1), PLATE_T, z0=PLATE_Z0))  # 상판

    # 스탠드 안착 얕은 홈 (플레어 바닥 14.3 x 14.74)
    body = body.difference(prism(rounded_rect(14.9, 15.3, 1.0), 0.7,
                                 z0=WALL_TOP - 0.6))
    # 중앙 기둥 + 배선 통로 (관통)
    body = body.difference(prism(rounded_rect(7.0, 7.0, 0.8), PLATE_T + 1.5,
                                 z0=PLATE_Z0 - 0.8))
    # 다리 구멍 2개 (다리 2.0 → 구멍 2.3)
    for px, py in (PRONG_A, PRONG_B):
        body = body.difference(prism(rect(2.3, 2.3, px, py), PLATE_T + 1.5,
                                     z0=PLATE_Z0 - 0.8))

    body = bottom_rabbet(body)
    body = deco_bands(body, [3.5])
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

    # 조립 미리보기 (F2는 z=7.5, F3는 z=28에 얹힘)
    asm = f1.copy()
    f2a = f2.copy(); f2a.apply_translation([0, 0, 7.5]); asm = asm + f2a
    f3a = f3.copy(); f3a.apply_translation([0, 0, 28.0]); asm = asm + f3a
    asm.export('output_stl/assembly_preview.stl')
    print('완료! 전체 44 x 39 x 38mm')
