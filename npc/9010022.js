function start() {
	var text = "";
	text += "#0#�A���A���g���Z��\r\n";
	text += "#1#���˓���\r\n";
	text += "#2#�����X�^�[�J�[�j�o��\r\n";
	text += "#3#�����X�^�[�J�[�j�o��2nd\r\n";
	text += "#4#���̊C�̗H��D\r\n";
	text += "#5#�l�g�̃s���~�b�h\r\n";
	text += "#6#���J�ʋ��\r\n";
	text += "#7#�K���̑�\r\n";
	text += "#8#�����̎��@\r\n";
	cm.askMapSelection(text);
}

function action(mode, type, selection) {
	if (mode == 1) {
		switch (selection) {
			case 0:
				cm.saveLocation("MULUNG_TC");
				cm.warp(980010000, 0);
				break;
			case 1:
				cm.saveLocation("MULUNG_TC");
				cm.warp(925020000, 0);
				break;
			case 2:
				cm.saveLocation("MULUNG_TC");
				cm.warp(980000000, 4);
				break;
			case 3:
				cm.saveLocation("MULUNG_TC");
				cm.warp(980030000, 4);
				break;
			case 4:
				cm.saveLocation("MULUNG_TC");
				cm.warp(923020000, 0);
				break;
			case 5:
				cm.saveLocation("MULUNG_TC");
				cm.warp(926010000, 4);
				break;
			case 6:
				cm.saveLocation("MULUNG_TC");
				cm.warp(910320000, 0);
				break;
			case 7:
				cm.saveLocation("MULUNG_TC");
				cm.warp(180000000, 0);
				break;
			case 8:
				cm.saveLocation("MULUNG_TC");
				cm.warp(950100000, 9);
				break;
			default:
				break;
		}
	}
	cm.dispose();
}