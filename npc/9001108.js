// �ē�������
// �p�r�s�� 3�̃}�b�v�փ����_������炵��?

var status = -1;
function EnterRabbit() {
	switch (status) {
		case 0:
			{
				cm.sendYesNo("���ꂵ�܂����H�i�e�X�g�j");
				return;
			}
		case 1:
			{
				// ����}�b�v��7����̂Ń~�j�_���W�����^�C�v?
				var r = Math.floor(Math.random() * 3);
				switch (r) {
					case 0:
						cm.warp(922230100, "sp");
						break
					case 1:
						cm.warp(922230200, "sp");
						break
					case 2:
						cm.warp(922230300, "sp");
					default:
						break
				}
				break;
			}
		default:
			break;
	}
	cm.dispose();
}
function LeaveRabbit() {
	switch (status) {
		case 0:
			{
				cm.sendYesNo("�ޏo���܂����H");
				return;
			}
		case 1:
			{
				cm.warp(922230000, "sp");
				break;
			}
		default:
			break;
	}
	cm.dispose();
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	var mapid = cm.getMapId();

	if (mapid == 922230000) {
		EnterRabbit();
	}
	else {
		LeaveRabbit();
	}
}