// �^�N�V�[
// �`��

var taxi_map = Array(
	[104000000, 0],
	[100000000, 0],
	[102000000, 0],
	[101000000, 0],
	[103000000, 0],
	[120000000, 0]
);

var npc_talk_status = -1;
var to_map = 0;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// �����}�}
				var text = "����ɂ��́`! ���X�`�����^�^�N�V�[�ł��B���̑��ň��S�ő����ړ��������̂ł���? ����Ȃ玄�ǂ��̃^�N�V�[�𗘗p���Ă݂ĉ������B �������i�ł��]�݂̏��܂Őe�؂Ɍ}���č����グ�Ă��܂��B\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				var text = "�ړI�n�����I�т��������B�����ɗ������قȂ�܂��B\r\n";
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
				// �e�L�X�g�K�� �{���͌뎚����?
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