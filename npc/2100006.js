// �}�Y��

var status = 0;
var beauty = 0;
var mhair = Array(30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160);
var fhair = Array(31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010);
var hairnew = Array();



function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status >= 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("�ӂӂӁc�M�������ł��w�A�X�^�C�����Ǘ����邠�Ȃ��͖{���̃I�V�������ł��ˁB#b�������ʌ�(�A���A���g)#k��#b���ѓ��ʌ�(�A���A���g)#k�������Ă���΃w�A�X�^�C����ς��Ă݂܂��񂩁B\r\n#L0##b�w�A�X�^�C���̕ύX(�������ʌ��g�p)#k#l\r\n#L1##b�w�A�J���[�̕ύX(���ѓ��ʌ��g�p)#k#l\r\n#L2##b�A�C�h���X�^�[�w�A�ɕύX#k#l\r\n");
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for (var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair()
							% 10));
					}
				}
				if (cm.getChar().getGender() == 1) {
					for (var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair()
							% 10));
					}
				}
				cm.sendStyle("�ӂӂӁc���Ȃ��̃w�A�X�^�C����V�����X�^�C���ɕς��Ă����܂��傤�B���̃w�A�X�^�C���ɂ��񂴂肵�Ă��܂��񂩁H#b�������ʌ�(�A���A���g)#k�������Ă���̂ł�����A���C�����������B�����ς������w�A�X�^�C�����������I��ł��������B", hairnew);
			} else if (selection == 1) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
					/ 10) * 10;
				for (var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("Every once in a while, it doesn't hurt to change up your hair color... it's fun. Allow me, the great Mazra, to dye your hair, so you just bring me #bAriant hair color coupon(VIP)#k, and choose your new hair color.", haircolor);
			}
		}
		else if (status == 2) {
			cm.dispose();
			if (beauty == 1) {
				if (cm.haveItem(5150027) == true) {
					cm.gainItem(5150027, -1);
					cm.setHair(hairnew[selection]);
					cm.sendOk("Enjoy your new and improved hairstyle!");
				} else {
					cm.sendNext("I thought I told you, you need the coupon in order for me to work magic on your hair check again.");
				}
			}
			if (beauty == 2) {
				if (cm.haveItem(5151022) == true) {
					cm.gainItem(5151022, -1);
					cm.setHair(haircolor[selection]);
					cm.sendOk("Enjoy your new and improved haircolor!");
				} else {
					cm.sendNext("I thought I told you, you need the coupon in order for me to work magic on your hair check again.");
				}
			}
		}
	}
}
