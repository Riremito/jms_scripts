function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
                if (pi.getMapId() == 920010200) {
                    if (pi.isLeader()) {
                        pi.mapMessage("�����b<���B��>�h���F�C");
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
                        pi.mapMessage("�����b<�ܮw>�h���F�C");
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
                        pi.mapMessage("�����b<�𮧫�>�h���F�C");
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
                        pi.mapMessage("�����b<�ʦL����>�h���F�C");
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
                        pi.mapMessage("�����b<�j�U>�h���F�C");
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
                        pi.mapMessage("�����b<�V�W�q�D>�h���F�C");
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
                        pi.mapMessage("�����b<�x��>�h���F�C");
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
                        pi.mapMessage("�����b<�·t����>�h���F�C");
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
		pi.playerMessage("�u�������~��M�w�n���n�X�h");
	}
}