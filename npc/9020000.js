// グループクエスト 一番目の同行
// ラケリース

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var mapid = cm.getMapId();
				var text = "#e<グループクエスト：一番目の同行>#n\r\n";
				text += "グループメンバーたちと共に力を合わせてクエストを解決してみませんか？その中にはお互いに力を合わせないと解決できない障害物がたくさんありますので…挑戦を希望しましたら#bあなたが属しているグループのグループ長#kを通し、私に声をかけてください。\r\n";
				text += "#L" + 0 + "##bグループクエストがしたいです#k#l\r\n";
				text += "#L" + 1 + "##b共にするグループメンバーを探したいです#k#l\r\n";
				text += "#L" + 2 + "##b説明が聞きたいです#k#l\r\n";
				text += "#L" + 3 + "##bデバッグモード#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				// test
				if (selection == 3) {
					var em = cm.getEventManager("KerningPQ");
					if (em == null) {
						cm.sendOk("カニクエ 未実装");
					}
					else {
						cm.sendOk("カニクエ 開催中");
						var prop = em.getProperty("state");
						if (prop == null || prop.equals("0")) {
							em.startInstance(cm.getParty(), cm.getMap());
						}
					}
				}
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}

/*
function start() {
	cm.removeAll(4001007);
	cm.removeAll(4001008);
	if (cm.getParty() == null) { // No Party
		cm.sendOk("How about you and your party members collectively beating a quest? Here you'll find obstacles and problems where you won't be able to beat it without great teamwork.  If you want to try it, please tell the #bleader of your party#k to talk to me.");
	} else if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("If you want to try the quest, please tell the #bleader of your party#k to talk to me.");
	} else {
		// Check if all party members are within Levels 21-30
		var party = cm.getParty().getMembers();
		var mapId = cm.getMapId();
		var next = true;
		var levelValid = 0;
		var inMap = 0;

		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			if ((cPlayer.getLevel() >= 21 && cPlayer.getLevel() <= 200) || cPlayer.getJobId() == 900) {
				levelValid += 1;
			} else {
				next = false;
			}
			if (cPlayer.getMapid() == mapId) {
				inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
			}
		}
		if (party.size() > 6 || inMap < 4) {
			next = false;
		}
		if (next) {
			var em = cm.getEventManager("KerningPQ");
			if (em == null) {
				cm.sendOk("This PQ is not currently available.");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {
					em.startInstance(cm.getParty(), cm.getMap());
				} else {
					cm.sendOk("Someone is already attempting on the quest.");
				}
				cm.removeAll(4001008);
				cm.removeAll(4001007);
			}
		} else {
			cm.sendOk("Your party is not a party of four. Please make sure all your members are present and qualified to participate in this quest. I see #b" + levelValid.toString() + "#k members are in the right level range, and #b" + inMap.toString() + "#k are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
		}
	}
	cm.dispose();
}

function action(mode, type, selection) {
}
*/