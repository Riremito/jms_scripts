function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920010200) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("�����i�J<���B��>");
                }
		pi.warp(920010200, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("�����i�J����~��i�J");
	}
}