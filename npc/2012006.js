// �I���r�X �D
// map 200000100

var ship_platform = Array(
	[200000110, "�G���j�A�s���̑D�ɏ�鏸�~��"],
	[200000120, "���f�B�u���A���s���̑D�ɏ�鏸�~��"],
	[200000130, "���v���s���̑D�ɏ�鏸�~��"],
	[200000140, "���ˍs���̃c���ɏ�鏸�~��"],
	[200000150, "�A���A���g�s���̃W�j�ɏ�鏸�~��"],
	[200000160, "�G�����s���̑D�ɏ�鏸�~��"]
);

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�I���r�X�X�e�[�V�����ɂ͑����̏��~�ꂪ����܂��B�ړI�n�ɂ���Đ��������~��֍s���Ȃ���΂Ȃ�܂���B�ǂ̕��ʂɌ������D�̏��~��ɍs����ł����H\r\n";
				for (var i = 0; i < ship_platform.length; i++) {
					text += "#L" + ship_platform[i][0] + "##b" + ship_platform[i][1] + "#k#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				cm.warp(mapid, "west00");
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}