// �����̔�
// 3���]�E

/*
	�����̔�����
	105070001	��m 		�A���̑�-�L��
	100040106	���@�g��	�׋C�̐X2
	105040305	�|�g��		�X���[�s�[�_���W����5
	107000402	����		���[�p����2
	105070200	�C��		�G�r���A�C�̑��Q

	�E�ƕ� �����̐��E (��������20��)
	108010100 �|�g��			9001002
	108010200 ���@�g��			9001001
	108010300 ��m				9001000
	108010400 ����				9001003
	108010500 �C��
	804000700 �f���A���u���C�h

*/

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "\r\n";
				text += "#L" + 0 + "##b#k#l\r\n";
				text += "#L" + 1 + "##b#k#l\r\n";
				return cm.sendSimple(text);
			}
		case 1:
			{
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
/*
function start() {
	//if (cm.getQuestStatus(100101) == 1 && !cm.haveItem(4031059)) {
		var em = cm.getEventManager("3rdjob");
		if (em == null) {
			cm.sendOk("Sorry, but everything is broken.");
		} else {
			em.newInstance(cm.getName()).registerPlayer(cm.getChar());
		}
	//} else {
		cm.sendOk("lul.");
	//}
	cm.dispose();
}

function action(mode, type, selection) {

}
*/