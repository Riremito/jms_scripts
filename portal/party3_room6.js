function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010700) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<�V�W�q�D>");
                }
		pi.warp(920010700, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}