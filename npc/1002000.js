// �s��
// �^�N�V�[
// �e�L�X�g�s���Ő������e���s���Ȃ̂ňړ�������������

// �����ʂ�̕���
var taxi_map = Array(
	[101000000, 0],
	[102000000, 0],
	[104000000, 0],
	[100000000, 0],
	[103000000, 0],
	[120000000, 0]
);

var npc_talk_status = 0;
var to_map = 0;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 1:
			{
				// �����}�}
				var text = "�N�͏��S�҂ł͂Ȃ��ȁH�Ȃ痿���͋K��ǂ���ɂ����������H�����A�ǂ̑��֍s�������񂾂��H\r\n";
				var mapid = cm.getMapId();
				for (var i = 0; i < taxi_map.length; i++) {
					// ���݂̃}�b�v�̓X�L�b�v
					if (mapid == taxi_map[i][0]) {
						continue;
					}
					text += "#L" + taxi_map[i][0] + "##b#m" + taxi_map[i][0] + "#(" + taxi_map[i][1] + "����)#k#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 2:
			{
				to_map = selection;
				var text = "�����ł͂����p�����Ȃ��悤�ł��ˁB�{����#m" + to_map + "#�ֈړ����܂����H\r\n";
				return cm.sendYesNo(text);
			}
		case 3:
			{
				cm.warp(to_map);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}