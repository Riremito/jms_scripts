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
				var npc_shop = cm.createNpcShop(npc_id);
				npc_shop.addItem(2000005, 3000);
				npc_shop.addItem(2050004, 500);
				npc_shop.addItem(2070006, 30000);
				npc_shop.addItem(2330000, 30000);
				npc_shop.start(cm.getPlayer());
				break;
			}
		default:
			break;
	}

	return cm.dispose();
}
