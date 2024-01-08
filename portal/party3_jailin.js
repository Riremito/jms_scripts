function enter(pi) {
        if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	    pi.warp(pi.getMapId() + 2, 0);
        } else if (pi.getMap().getAllMonstersThreadsafe().size() >= 1) {
	    pi.warp(pi.getMapId() + 1, 0);
        }
}