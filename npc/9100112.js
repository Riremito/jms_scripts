// �K�V���|�� ���@��

var rewards = new Array(
	2370000,
	2370001,
	2370002,
	2370003,
	2370004,
	2370005,
	2370006,
	2370007,
	2370008,
	2370009,
	2370010,
	2370011,
	2370012
);

function RandomRewards() {
	var target = Math.floor(Math.random() * rewards.length);

	cm.gainItem(rewards[target], 1);
	return true;
}

function ShowProb() {
	var text = "���́u�K�V���|���v��1�񂲎g�p���������ƁA���̃��A�A�C�e�����܂ނ����ꂩ1���l���ł��܂��B\r\n";
	text += "���w���񐔂ɉ����Ē��I�̊m�����ϓ�������̂ł͂������܂���B\r\n";
	text += "���S�ẴA�C�e���͏d�����ē���\�ł��B\r\n";

	for (var i = 0; i < rewards.length; i++) {
		text += "#v"+ rewards[i] + "##t" + rewards[i] +  "# #b(" + Math.floor(1 / rewards.length * 100) + "%)#k\r\n";
	}

	cm.sendOk(text);
}

var status = -1;
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}

	switch (status) {
		case 0:
			{
				var text = "���̗p�ł����B\r\n";
				text += "#L" + 1 + "##b" + "�K�V���|���i���@���j�𗘗p�������ł�" + "#l#k\r\n";
				text += "#L" + 2 + "##b" + "���@���̎g�p���@�ɂ��Ēm�肽���ł�" + "#l#k\r\n";
				text += "#L" + 0 + "##b" + "�r�o��" + "#l#k\r\n";
				cm.sendSimple(text);
				return;
			}
		case 1:
			{
				switch (selection) {
					case 0:
						{
							ShowProb();
							break;
						}
					case 1:
						{
							if (cm.haveItem(5220000)) {
								if (RandomRewards()) {
									cm.gainItem(5220000, -1);
								}
							}
							break;
						}
					case 2:
						{
							var text = "#b�����@���̎g�p���@�ɂ��āB\r\n";
							text += "���@���A�C�e�����_�u���N���b�N����ƌo���l�𓾂鎖���ł��܂��B\r\n\r\n";
							text += "�����@���ɐݒ肳��Ă���o���l���A���@���g�p���̃L�����N�^�[���x���̕K�v�o���l�i���P�j��葽�������ꍇ�̓���ɂ��āB\r\n";
							text += "��L�̏ꍇ�A���x���A�b�v����܂ł͕��@���̌o���l���g�p���܂����A���@���̌o���l���c�����ꍇ�A��ʉ��̌o���l�o�[�ɕ��@���̎c�o���l���L�^����܂��B\r\n\r\n";
							text += "�����@���̎c�o���l�̊m�F���@�ɂ��āB\r\n";
							text += "�o���l�o�[�̒ʏ�̐F�̓O���[���F�ł����A�c�o���l�̓I�����W...�����Ńe�L�X�g�͓r�؂�Ă���\r\n";

							cm.sendOk(text);
							break;
						}
					default:
						break;
				}
				break;
			}
		default:
			break;
	}

	cm.dispose();
}