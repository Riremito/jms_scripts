function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010600) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<�j�U>");
                }
		pi.warp(920010600, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}