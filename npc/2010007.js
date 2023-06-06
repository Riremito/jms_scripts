// �w���N��
// �M���h

var status = -1;
var sel;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		// BB��
		var text = "�����A������`�������H\r\n";
		/*
		text += "#b#L0#�M���h�l���𑝂₵�����ł��B#l\r\n"
		text += "#L1#�M���h�����U�������ł��B#l\r\n"
		text += "#L3#�M���h�}�X�^�[��ύX�������ł��B#l\r\n"
		text += "#L2#�M���h�V�X�e���ɂ��Ă����Əڂ����m�肽���ł��B#l\r\n"
		text += "#L4#<�V�����j�A���̒n�����H>�ɂ��ċ����Ă��������B#l\r\n"
		*/

		text += "#b#L0#�M���h���쐬�������ł��B#l\r\n"; //?
		text += "#b#L2#�M���h�l���𑝂₵�����ł��B#l\r\n";
		text += "#L1#�M���h�����U�������ł��B#l\r\n";


		cm.sendSimple(text);
	}
	else if (status == 1) {
		sel = selection;
		if (selection == 0) {
			if (cm.getPlayerStat("GID") > 0) {
				cm.sendOk("You may not create a new Guild while you are in one.");
				cm.dispose();
			} else
				cm.sendYesNo("Creating a Guild costs #b5,000,000 mesos#k, are you sure you want to continue?");
		} else if (selection == 1) {
			if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
				cm.sendOk("You can only disband a Guild if you are the leader of that Guild.");
				cm.dispose();
			} else {
				// No �������`�悭���߂Ă��ꂽ�ȁB���܂Ŋ撣���Ă����M���h���Ȃ����Ă͂����Ȃ����낤�B
				cm.sendYesNo("�M���h��{���ɉ��U�������̂��B����͂���́A�������ȁB��x���U�����Ⴄ�ƁA�L�~�̃M���h�͉i���ɍ폜����Ă��܂��񂾂��B�F��ȃM���h�������������ꏏ�ɏ�����񂾁B����ł��A�s�������H");
			}
		} else if (selection == 2) {
			if (cm.getPlayerStat("GID") <= 0 || cm.getPlayerStat("GRANK") != 1) {
				cm.sendOk("You can only increase your Guild's capacity if you are the leader.");
				cm.dispose();
			} else {
				// �M���h�����o�[���𑝂₵�����ė����̂��H���ށA�M���h�������Ԃ񐬒������悤���ȁ`���ɒm���Ă���Ǝv�����A�M���h�����o�[���𑝂₷�ɂ͉�X�M���h�{���ɂ܂��o�^�����Ȃ���΂Ȃ�Ȃ��B�������萔����GP���g�p����K�v������񂾁B���Ȃ݂ɁA�M���h�����o�[���͍ő�200���܂ő��₷���Ƃ��ł���B
				cm.sendYesNo("���݃M���h�̍ő�l����#b20�l#k�ŁA#b10�l#k���₷���߂ɕK�v�Ȏ萔����#bGP 10000#k���B���Ȃ݂ɁA�N�̃M���h�͌���#bGP 14363#k��GP���������Ă���B�ǂ��A�M���h�����o�[�𑝂₵�������H");
				// No �萔�������S�ɂȂ��Ă���̂��H���Ԃ��o�Ă�GP���炢�͂����ɒ��܂邩��A����ȂɐS�z���邱�Ƃ͂Ȃ��B����ł́A�܂����Ă���B
			}
		}
	} else if (status == 2) {
		if (sel == 0 && cm.getPlayerStat("GID") <= 0) {
			cm.genericGuildMessage(1);
			cm.dispose();
		} else if (sel == 1 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
			cm.disbandGuild();
			cm.dispose();
		} else if (sel == 2 && cm.getPlayerStat("GID") > 0 && cm.getPlayerStat("GRANK") == 1) {
			cm.increaseGuildCapacity();
			cm.dispose();
		}
	}
}