// �ΒK���Z ����
// �R���y�C

var main_menu = Array(
	"#b�A�W�g�̐����𕷂��B#k",
	"#b�A�W�g�ɘA��čs���Ă���B#k",
	"#b�p�͂Ȃ��B#k"
);

function select_explain(npc_talk_status) {
	switch (npc_talk_status) {
		case 1:
			{
				var text = "�I�C���̓A�W�g�܂ňē����Ă�邱�Ƃ��ł��邺�B�������A�W�g�̓K���̈����A�����E���E�����邩���A�͂��ĕ��������Ă���s�����Ƃɂ��Ȃ��B�A�W�g�ɂ͂��̋ߕӂ̐e�����������d�؂��Ă����e��������B�A�W�g�ɂ͂܂��ȒP�ɍs����񂾂��A�A�W�g�̍ŏ�K�ɂ��镔���ɂ�1��1�񂵂��s���ˁ[���B��e���̕����͋��낵���Ƃ��낾�B����܂蒷�����Ȃ������ǂ�����A�Z���ԂŃP�����Ă����I���̑�e�����������񂶂�ˁ[���A��e���ɉ�܂łɂ��r���Ղ��̋�����炪���邩��A������������`�B";
				cm.sendSimple(text);
				break;
			}
		default:
			break;
	}

	return cm.dispose();
}

function select_go(npc_talk_status) {
	switch (npc_talk_status) {
		case 1:
			{
				var text = "�����A�E�҂�҂��Ă������B���̂܂ܓz������u����Ύ��Ԃ������Ȃ��Ȃ�B���̑O�ɂ��O����̗͂ŁA�T�K�ɂ����e���𒦂炵�߂Ă���B���ꂮ������f�͂���Ȃ�B��e���͊��l���̖Ҏ҂��G��Ȃ����������B�����A���O����̖ڂ����Ă���Ƃ���Ă����Ɗm�M�����Ă����B�����s�����B";
				return cm.sendSimple(text);
			}
		default:
			break;
	}

	return cm.dispose();
}

function menu_select(npc_talk_status, selection) {
	switch (selection) {
		case 0:
			{
				return select_explain(npc_talk_status);
			}
		case 1:
			{
				return select_go(npc_talk_status);
			}
		default:
			break;
	}
	return cm.dispose();
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
				var mapid = cm.getMapId();
				var text = "�p�͂Ȃ񂾁B\r\n";
				for (var i = 0; i < main_menu.length; i++) {
					text += "#L" + i + "#" + main_menu[i] + "#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				return menu_select(npc_talk_status, selection);
			}
		case 2:
			{
				cm.warp(801040000, 0);
			}
		default:
			break;
	}

	return cm.dispose();
}