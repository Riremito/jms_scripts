var status = -1;
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 40 && cm.haveItem(4032493)) {
			cm.sendYesNo("Would you like to move to Valefor's Strolling Place?");
		} else {
			cm.sendOk("You need to be less than level 40 and need the Valefor's Necklace to enter.");
			cm.dispose();
		}
} else {
	cm.warp(677000008,0);
	cm.dispose();
    }
}