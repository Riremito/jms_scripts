// �X�s�l��
// https://www.nicovideo.jp/watch/sm12852798

var spinel_map = Array(
	[740000000, "����X(��p)"],
	[701000000, "��C(����)"],
	[800000000, "�L�m�R�_��(���{)"],
	[500000000, "����s��(�^�C�����h)"],
	[702000000, "�v�R��(����)"]
);

var npc_talk_status = -1;
var to_map = 0;
var traveling = false;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var mapid = cm.getMapId();
				var spinel_select = "";

				for (var i = 0; i < spinel_map.length; i++) {
					// ���݂̃}�b�v�̓X�L�b�v
					if (mapid == spinel_map[i][0]) {
						traveling = true;
						continue;
					}
					spinel_select += "#L" + spinel_map[i][0] + "##b" + spinel_map[i][1] + "#k#l\r\n";
				}

				// ���s��
				if (traveling) {
					var return_map = cm.getSavedLocation("WORLDTOUR");
					spinel_select += "#L" + return_map + "##b���s���I��#m" + return_map + "#�ɖ߂肽���ł��B#k#l\r\n";
					var text = "�ǂ��ɍs���Ă݂����ł����H\r\n";
					return cm.sendSimple(text + spinel_select);
				}

				var text = "#b�����̃L�m�R�_�Ђ��܂߁A�����̏�C�A��p�̐��咬#k�ɑ����A#b�^�C�����h�̐���s��#k�ւ̃R�[�X���p�ӏo���Ă��܂��B�e���s�n�ł������F�l�̊y�������s�̂��߂Ɋ撣��܂��B�ł́A�ǂ�����s���Ă݂����ł����H\r\n";
				return cm.sendSimple(text + spinel_select);
			}
		case 1:
			{
				to_map = selection;
				if (!traveling) {
					cm.saveLocation("WORLDTOUR");
				}
				cm.warp(to_map);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
