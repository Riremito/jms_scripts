// �A���̑�
// ���X�`�������^�N�V�[

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "���S�҂ł͂Ȃ����ɂ͌��߂�ꂽ��������������܂��B�A���̑��L��̓r�N�g���A�A�C�����h�̒����ɂ���_���W�����̉��́A24���ԉ��䂪����ł���Ƃ���ł��B#b10,000����#k�ŃA���̑��L��܂Ŕ@���ł��傤���H\r\n";
				return cm.sendYesNo(text);
			}
		case 1:
			{
				cm.warp(105070001, 0);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}