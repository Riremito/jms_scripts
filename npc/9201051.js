// �W�����E�o���P�[�h
// iTCG

// ��������������

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "����A���������Ă���񂾁H�����I����͂ƂĂ����A�ȕ�����B�ǂ��Ŏ�ɓ��ꂽ�̂��ȁH\r\n";
				text += "#L" + 0 + "##b���ꂪ���Ȃ̂������ĉ������B#k#l\r\n";
				text += "#L" + 1 + "##b���̌Â������H�����������񂾌C�����͉��l���邾�낤���ǂˁI#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// iTCG�n�̏���
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}