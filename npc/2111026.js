// ���������@�w
var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �ł��ƂƂ낢
				cm.getMap().killMonster(8090000);
				// BB��
				var text = "�􉽊w�Ȗ͗l���`����Ă��閂���w���B�����ɂ͎����Ă��Ȃ��悤�����c�B\r\n";
				return cm.sendOk(text);
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