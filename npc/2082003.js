// ���v�� - ���Ԃ̐_�a
// �R���o

var warp_map = Array(
	// �|�[�^���ԍ�������Ȃ��̂œK���ł�
	[200090500, 0, "#b�h���S���ɕϐg�������ł��B#k"]
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
				var mapid = cm.getMapId();
				var text = "�H������΂����ɍs���邶��낤�B���Ⴊ�A���ꂾ���ł͑����̂���B�����s�����̋��Ԃ��Ԃ��߂ɂ́A��v�ȗ؂��K�v�Ȃ񂶂�B�߂��Ă�����@�܂Œm���Ă��锼�b���́A�������V��l���������c�����������ɍs�������񂶂������A���V���ϐg�����Ă�낤�B���O�̍��̎p�����ł���A���A���̏u�Ԃ����́@#b�h���S��#k�ɂȂ�̂���c�B\r\n";
				for (var i = 0; i < warp_map.length; i++) {
					text += "#L" + warp_map[i][0] + "#" + warp_map[i][2] + "#l\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				var mapid = selection;
				for (var i = 0; i < warp_map.length; i++) {
					if (warp_map[i][0] == mapid) {
						cm.useItem(2210016);
						cm.warp(warp_map[i][0], warp_map[i][1]);
						return cm.dispose();
					}
				}
				break;
			}
		default:
			break;
	}

	return cm.dispose();
}