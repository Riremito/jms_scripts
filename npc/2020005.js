// �A�C�e���̔�
// �A���P�X�^

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "�N�̂��A��#b�Ñ�̖{#k�͖����ɕ���ł����B�������̂����łW�O�O�N�ԂɏC�����Ă����킵�̗͂̔����𖳂��������ˁA��������ł��ɂ����Ȃ��B�������A�ǂ���ŌN�A�������A�C�e���͗~�����Ȃ����H���܂Ŏ�`���Ă��ꂽ���炾�B�킵�������Ă�����̂ŕK�v�Ȃ��̂�����Ȃ���������Ă����悤�B\r\n";
				text += "#L" + 0 + "##b����(�l�i�F300 ����)#k#l\r\n";
				text += "#L" + 1 + "##b���a���Ö�(�l�i�F400 ����)#k#l\r\n";
				text += "#L" + 2 + "##b���@�̐�(�l�i�F5000 ����)#k#l\r\n";
				text += "#L" + 3 + "##b�����̐�(�l�i�F5000 ����)#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}