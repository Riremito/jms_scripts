function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920011000) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<�·t����>");
                }
		pi.warp(920011000, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}