function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010400) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<�𮧫�>");
                }
		pi.warp(920010400, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}