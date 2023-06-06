// 機械装置
// ビシャス退場
var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				cm.sendYesNo("僕を通じて安全な場所に移動できます。このまま移動しますか？");
				return;
			}
		case 1:
			{
				cm.warp(220080000);
				break;
			}
		default:
			break;
	}

	cm.dispose();
}
