/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -217);
    rm.mapMessage("�΂̖ڂ̗͂ŃW���N������������܂��B");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
