/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -217);
    rm.mapMessage("‰Î‚Ì–Ú‚Ì—Í‚ÅƒWƒƒƒNƒ€‚ª¢Š«‚³‚ê‚Ü‚·B");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
