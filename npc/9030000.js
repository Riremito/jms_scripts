// プレドリック

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var npc_id = cm.getNpc();
				var npc_shop = cm.createScriptNpcShop(npc_id);
				npc_shop.add(2000005, 3000);
				npc_shop.add(2050004, 500);
				npc_shop.add(2070006, 30000);
				npc_shop.add(2330000, 30000);
				npc_shop.sendShop(cm.getPlayer());
				break;
			}
		default:
			break;
	}

	return cm.dispose();
}
