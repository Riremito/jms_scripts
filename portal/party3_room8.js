function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader() || pi.getPlayerCount(920011000) != 0) {
                if (pi.isLeader()) {
		    pi.mapMessage("隊長進入<黑暗之室>");
                }
		pi.warp(920011000, 0);
		pi.playPortalSE();
	} else {
		pi.playerMessage("隊長進入之後才能進入");
	}
}