function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 920011200) { //exit
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	cm.warp(200080101);
	cm.dispose();
	return;
    }
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
	cm.sendOk("�еy��A�աC");
	cm.dispose();
	return;
    }
    if (!cm.isLeader()) {
	cm.sendOk("�Хs�A�������Ӹ�ڻ��ܡI");
	cm.dispose();
	return;
    }
    if (em.getProperty("pre").equals("0")) {
	cm.sendNext("��ĬK��");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 920010000:
            clear();
	    var eim = cm.getEventInstance();
	    var players = eim.getPlayers();
	    var bonusmap = cm.getMap(920010000);
	    for (var i = 0; i < players.size(); i++) {
	        players.get(i).changeMap(bonusmap, bonusmap.getPortal(2));
	    }
//	    cm.warpParty(920010000, 2);
	    break;
	case 920010100:
	    if (em.getProperty("stage").equals("6") && !cm.haveItem(4001055, 1)) {
		if (em.getProperty("finished").equals("0")) {
	        var eim = cm.getEventInstance();
	        var players = eim.getPlayers();
	        var bonusmap = cm.getMap(920010800);
	        for (var i = 0; i < players.size(); i++) {
	            players.get(i).changeMap(bonusmap);
	        }
//		    cm.warpParty(920010800); //GARDEN.	
		} else {
		    cm.sendOk("���§A�@�ϤF����R�k���I�и�o���ܡI");
		}
	    } else {
		cm.sendOk("Please, save Minerva! Gather the six pieces of her statue and talk to me to retrieve the final piece!");
	    }
	    break;
	case 920010200: //walkway
	    if (!cm.haveItem(4001050,30)) {
		cm.sendOk("Gather the 30 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else {
		cm.removeAll(4001050);
		cm.gainItem(4001044,1); //first piece
		cm.givePartyExp(7500);
		clear();
	    }
	    break;
	case 920010300: //storage
	    if (!cm.haveItem(4001051,15)) {
		cm.sendOk("Gather the 15 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else {
		cm.removeAll(4001051);
		cm.gainItem(4001045,1); //second piece
		cm.givePartyExp(7500);
		clear();
	    }
	    break;
	case 920010400: //lobby
	    if (em.getProperty("stage3").equals("0")) {
		cm.sendOk("Please, find the LP for the current day of week and place it on the music player.\r\n#v4001056#Sunday\r\n#v4001057#Monday\r\n#v4001058#Tuesday\r\n#v4001059#Wednesday\r\n#v4001060#Thursday\r\n#v4001061#Friday\r\n#v4001062#Saturday\r\n");
	    } else if (em.getProperty("stage3").equals("1")) {
//		if (cm.canHold(4001046,1)) {
//		    cm.gainItem(4001046,1); //third piece
		    cm.getMap().setReactorState();
//  		    cm.forceStartReactor(cm.getMapId(), 2002011);
//		    cm.givePartyExp(7500);
		    clear();
		    em.setProperty("stage3", "2");
/*		} else {
		    cm.sendOk("Please make room!");
		}*/
	    } else {
		cm.sendOk("Thank you so much!");
	    }
	    break;
	case 920010500: //sealed
	    if (em.getProperty("stage4").equals("0")) {
		var players = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
		    var z = cm.getMap().getNumPlayersInArea(i);
		    players.push(z);
		    total += z;
		}
		if (total < 5) {
		    cm.sendOk("�o�̻ݭn���ӤH�����q�~��}��");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage4_" + i).equals("" + players[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
//			if (cm.canHold(4001047,1)) {
	    		    clear();
//			    cm.gainItem(4001047,1); //fourth
		            cm.getMap().setReactorState();
//			    cm.forceStartReactor(cm.getMapId(), 2002012);
			    cm.givePartyExp(7500);
	    		    em.setProperty("stage4", "1");
/*			} else {
			    cm.sendOk("Please make room!");
			}*/
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct > 0) {
			    cm.sendOk("���@�Ӧa�誺���q�O�諸");
			} else {
			    cm.sendOk("�C�@�Ӧa�誺���q����");
			}
		    }
		}
	    } else {
		cm.sendOk("The portal is opened! Go!");
	    }
	    cm.dispose();
	    break;
	case 920010600: //lounge
	    if (!cm.haveItem(4001052,40)) {
		cm.sendOk("Gather the 40 Statue Pieces from the monsters in this stage, and please bring them to me so I can put them together!");
	    } else {
		cm.removeAll(4001052);
		cm.gainItem(4001048,1); //fifth piece
		cm.givePartyExp(7500);
		clear();
	    }
	    break;
	case 920010700: //on the way up
	    if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
	    	for(var i = 0; i < 5; i++) {
		    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
			react.push("1");
			total += 1;
		    } else {
			react.push("0");
		    }
	    	}
		if (total != 2) {
		    cm.sendOk("There needs to be 2 levers at the top of the map pushed on.");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 5; i++) {
			if (em.getProperty("stage62_" + i).equals("" + react[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 5) {
//			if (cm.canHold(4001049,1)) {
	    		    clear();
//			    cm.gainItem(4001049,1); //sixth
		            cm.getMap().setReactorState();
//			    cm.forceStartReactor(cm.getMapId(), 2002013);
			    cm.givePartyExp(7500);
	    		    em.setProperty("stage6", "1");
/*			} else {
			    cm.sendOk("Please make room!");
			}*/
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct >= 3) {
			    cm.sendOk("�@�Ӻb��O���T���C");
			} else {
			    cm.sendOk("��Ӻb��O���~���C");
			}
		    }
		}
	    } else {
		cm.sendOk("������g���I�I");
	    }
	    break;
	case 920010800:
	    var eim = cm.getEventInstance();
	    var players = eim.getPlayers();
	    var bonusmap = cm.getMap(920010100);
	    for (var i = 0; i < players.size(); i++) {
	        players.get(i).changeMap(bonusmap);
	    }
//	    cm.warpParty(920010100);
	    break;
	case 920010900:
	    cm.sendNext("�o�̬O�ʺ��C�A�i�H�b�o�̧��@�Ǧn�F��A���ڤ��{���ڭ̦�����H���b�o�̡C"); 
	    break;
	case 920011000:
	    cm.sendNext("�o�O���������ж��C�A�i�H�b�o�̧��@�Ǧn�F��A���ڤ��{���ڭ̦�����H���b�o�̡C"); 
	    break;
    }
    cm.dispose();
}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}