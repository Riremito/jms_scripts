function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
                if (pi.getMapId() == 920010200) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<散步路>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(4));
	            }
//		    pi.warp(920010100, 4);
                } else if (pi.getMapId() == 920010300) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<倉庫>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(12));
	            }
//		    pi.warp(920010100, 12);
                } else if (pi.getMapId() == 920010400) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<休息室>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(5));
	            }
//		    pi.warp(920010100, 5);
                } else if (pi.getMapId() == 920010500) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<封印之室>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(13));
	            }
//		    pi.warp(920010100, 13);
                } else if (pi.getMapId() == 920010600) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<大廳>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(15));
	            }
//		    pi.warp(920010100, 15);
                } else if (pi.getMapId() == 920010700) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<向上通道>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(14));
	            }
//		    pi.warp(920010100, 14);
                } else if (pi.getMapId() == 920010800) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<庭園>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(3));
	            }
//		    pi.warp(920010100, 3);
                } else if (pi.getMapId() == 920011000) {
                    if (pi.isLeader()) {
                        pi.mapMessage("隊長在<黑暗之室>退場了。");
                    }
	            var eim = pi.getEventInstance();
	            var players = eim.getPlayers();
	            var bonusmap = pi.getMap(920010100);
	            for (var i = 0; i < players.size(); i++) {
	                players.get(i).changeMap(bonusmap, bonusmap.getPortal(16));
	            }
//		    pi.warp(920010100, 16);
                }
		pi.playPortalSE();
	} else {
		pi.playerMessage("只有隊長才能決定要不要出去");
	}
}