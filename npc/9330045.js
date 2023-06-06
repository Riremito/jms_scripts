// �ނ��Ǘ��l

var tips = Array(
	"�ނ��ɓ���",
	"�a�𔃂�",
	"�ނ�p�̈֎q�𔃂�",
	"�ނ�̐���",
	"�f�o�b�O���[�h"
);

function EnterFishingLagoon(debug_mode) {
	// �ފƂ܂��͍����ފƂ��K�v
	if (!cm.haveItem(5340000) && !cm.haveItem(5340001)) {
		// �����ފƊl��
		if (!debug_mode) {
			return cm.sendSimple("[test]�ފƂ�����܂���");
		}
		cm.gainItem(5340001, 1);
	}
	// �ނ�p�̈֎q���K�v
	if (!cm.haveItem(3011000)) {
		// �ނ�p�֎q�l��
		if (!debug_mode) {
			return cm.sendSimple("[test]�ނ�p�̈֎q��������܂���");
		}
		cm.gainItem(3011000, 1);
	}
	// �a�܂��͍����a
	if (!cm.haveItem(2300000) && !cm.haveItem(2300001)) {
		// �ނ�p�֎q�l��
		if (!debug_mode) {
			return cm.sendSimple("[test]�a��������܂���");
		}
		cm.gainItem(2300001, 120);
	}
	cm.saveLocation("FISHING");
	cm.warp(741000200, "out00");
	return cm.dispose();
}

function MainMenu(selection) {
	switch (tips[selection]) {
		case "�ނ��ɓ���":
			{
				return EnterFishingLagoon(false);
			}
		case "�a�𔃂�":
			{
				if (cm.getMeso() < 3000) {
					var text = "[test]����������܂���"
					return cm.sendSimple(text);
				}
				if (!cm.canHold(2300000, 120)) {
					var text = "[test]�A�C�e�������s�����Ă��܂�"
					return cm.sendSimple(text);
				}
				cm.gainMeso(-3000);
				cm.gainItem(2300000, 120);
				return cm.dispose();
			}
		case "�ނ�p�̈֎q�𔃂�":
			{
				if (cm.haveItem(3011000)) {
					var text = "[test]���Ɏ����Ă��܂�"
					return cm.sendSimple(text);
				}
				if (cm.getMeso() < 50000) {
					var text = "[test]����������܂���"
					return cm.sendSimple(text);
				}

				cm.gainMeso(-50000);
				cm.gainItem(3011000, 1);
				return cm.dispose();
			}
		case "�ނ�̐���":
			{
				var text = "�ފƁA�a�A�ނ�p�̈֎q���������A�Ȃ������x��11�ȏ�ł���Βނ��ɓ��ꂷ�邱�Ƃ��ł��܂��A1�����ɂ͉�����ނ邱�Ƃ��ł���ł��傤�B�ނ茋�ʂ�m�肽����΁A�ނ��ɘb�������Ă��������B"
				return cm.sendOk(text);
			}
		case "�f�o�b�O���[�h":
			{
				return EnterFishingLagoon(true);
			}
		default:
			{
				var text = "������";
				return cm.sendSimple(text);
			}
	}
}

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "����ȉ����Ƃ���܂ŁA���̗p�ł����B\r\n";
				for (var i = 0; i < tips.length; i++) {
					/*
					if (cm.getPlayer().isGM() && tips[i] == "�f�o�b�O���[�h") {
						continue;
					}
					*/
					text += "#L" + i + "##b" + tips[i] + "\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				return MainMenu(selection);
			}
		default:
			break;
	}

	return cm.dispose();
}