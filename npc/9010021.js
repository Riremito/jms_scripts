// �I�I�J�~����̃��H���t
// �e�X�g

var tips = Array(
	"�T�[�o�[���",
	"�A�b�v�f�[�g���",
	"�R�}���h�ꗗ",
	"�s�",
	"����",
	"�኱�p���������Č����Ȃ��M���h���̗R��",
	"�e�X�g"
);

function MainMenu(selection) {
	var text = "#r" + tips[selection] + "#k\r\n"
	switch (tips[selection]) {
		case "�T�[�o�[���":
			{
				text += "�o�[�W����: JMS v186.1 (BB�O�ŏI�o�[�W����)\r\n";
				text += "������: ???\r\n";
				text += "���݂�: JMS�Ɠ����ɂ���(�\��)\r\n";
				text += "Discord: #bhttps://discord.gg/72jpx7DfZH#k\r\n";
				text += "Windows Update�̂����ł��܂ɃT�[�o�[�������܂�\r\n";
				break;
			}
		case "�A�b�v�f�[�g���":
			{
				text += "2021/11/03 �ړ��nNPC, ���Ԃ̐_�a�C��\r\n";
				text += "2021/11/02 �K�V���|�����O�ǉ�\r\n";
				text += "2021/10/30 �ړ��nNPC�C��\r\n";
				text += "2021/10/29 �p�`���R����\r\n";
				text += "2021/10/22 �R��\r\n";
				break;
			}
		case "�R�}���h�ꗗ":
			{
				text += "#b@help#k\r\n";
				text += "\t@�n�R�}���h�̃w���v (�悭����R�}���h��)\r\n";
				text += "#b/help#k\r\n";
				text += "\t�w���v\r\n";
				text += "#b/info#k\r\n";
				text += "\t�X�N���v�gID�̕\��\r\n";
				text += "#b/debug#k\r\n";
				text += "\t�f�o�b�O���K�v�ȏꍇ�ɗ��p\r\n";
				text += "#b/fm, /�t���}#k\r\n";
				text += "\t�t���[�}�[�P�b�g�����ֈړ�\r\n";
				text += "#b/henesys, /�w�l�V�X#k\r\n";
				text += "\t�w�l�V�X�ֈړ�\r\n";
				text += "#b/leafre, /���v��#k\r\n";
				text += "\t���v���ֈړ�\r\n";
				text += "#b/magatia, /�}�K�e�B�A#k\r\n";
				text += "\t�}�K�e�B�A�ֈړ�\r\n";
				text += "#b/save#k\r\n";
				text += "\t���[���o�b�N�h�~�̂��ߌ��݂̏�Ԃ�ۑ�\r\n";
				text += "#b/map2 [MapID], /map [�}�b�v�� or MapID] (GM��p)#k\r\n";
				text += "\t�w��}�b�v�ֈړ�\r\n";
				break;
			}
		case "�s�":
			{
				text += "�W���N��������: �掿�̐؂�ւ��Ŏ኱�΍�\\r\n";
				text += "�p��̃��b�Z�[�W: �������I�ȃA��\r\n";
				text += "���ݔ\��: �܂Ƃ��ɔ\�͂����f����Ă��Ȃ��\������\r\n";
				text += "�r�V���X�̃n���}�[: �g���ƌł܂�̂ŉ������ő�p���Ă�������\r\n";
				text += "GM+������: �X�L�������̂��łĂĂ��܂�����}�b�v�̐l���S�������܂�\r\n";
				break;
			}
		case "����":
			{
				text += "�T�[�o�[���̂̓I�[�v���\�[�X�Ȃ̂ŒN�ł������̃T�[�o�[���Ă����Ԃɂ���\��ł�\r\n";
				text += "\t#bhttps://github.com/Riremito/JMSv186#k\r\n";
				text += "�T�[�o�[���̂�VPS�ɒN�ł��A�N�Z�X�\�ȏ�Ԃɂ��Ă����AVPS�o�R�Ōl��PC��Ŏ��s����Ă���T�[�o�[�ɐڑ�����`�ƂȂ��Ă��܂�\r\n";
				text += "VPS��ɂ͉����c��Ȃ��̂ň��S���S\r\n";
				text += "�p�X���[�h�͈Í�������Ĉ����Ă��܂�\r\n";
				break;
			}
		case "�኱�p���������Č����Ȃ��M���h���̗R��":
			{
				text += "LEXDIAMOND�Ƃ́A����Q�[���ɓo�ꂷ��g�D�̖��O�ł��B\r\n";
				text += "�܂�lex\r\n";
				text += "����̓��b�N�X���ēǂ݂܂�\r\n";
				text += "�p��ł͖@���Ƃ�����ȈӖ��ł����ǁB\r\n";
				text += "���n�̐~��a��ł́A�����ȥ�s��ȁA�Ƃ������Ӗ��ɂȂ�܂�\r\n";
				text += "����Diamond\r\n";
				text += "����̓_�C�A�����h�ł�\r\n";
				text += "���n�~��a��ł́A\r\n";
				text += "�|�����d���A�����ĎK�т邱�Ƃ̂Ȃ��S\r\n";
				text += "�Ƃ����Ӗ��ɂȂ�܂�\r\n";
				text += "�����ă_�C�A�����h�͂��炫�炵�ĂĔ������ł��ˁ[\r\n";
				text += "�����Ń_�C�A�����h�̂悤�ɃL���L�����Ă���́c\r\n";
				text += "�����Alexdiamond�Ƃ͢����̔�g�Ȃ̂ł���[\r\n";
				text += "�����1�ڂ̗R���ł��B�܂���ʂ̕��ɂ͌��̔�g�����Č����΃I�[�P�[\r\n";
				text += "2�ڂ̗R�������p���������ĂȂ��Ȃ������Ȃ��̂ł����ɂ��������Ȃ���\r\n";
				text += "�M�����ɂ͌����ĉ�������߂��ɂ�萋����A�Ƃ���\r\n";
				text += "�����S�������Ăق����A����ȈӖ������߂Ă܂�\r\n";
				text += "���Ȃ݂Ɍ��l�^�̃Q�[���ł̗R���͂悭�m��Ȃ��̂�\r\n";
				text += "���S�Ȏ��ȉ��߂Ȃ̂ł���\r\n";
				text += "(�܂������悤�ȈӖ��������Ƃ͎v�����ǁB)\r\n";
				break;
			}
		default:
			text = "������";
			break;
	}
	return cm.sendSimple(text);
}

var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "#r���j���[#k\r\n";
				for (var i = 0; i < tips.length; i++) {
					text += "#L" + i + "##b" + tips[i] + "\r\n";
				}
				return cm.sendSimple(text);
			}
		case 1:
			{
				return MainMenu(selection);
			}
		default:
			break;
	}
	return cm.dispose();
}