function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010300) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<�ܮw>");
                }
		pi.warp(920010300, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}