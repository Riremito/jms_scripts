// Packet Debugging Script

function test(c) {
	var p = c.getOutPacket();
	p.writeShort(0x00AD);
	p.writeInt(0x00007DBC); // �����~�g
	p.writeInt(-1); // �_���[�W
	p.writeZeroBytes(100);
	// ProcessPacket
	c.DebugPacket(p.getPacket());
}

// �l���X�̃��b�Z�[�W
function ShopClose(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// ���鏈��
	p.write(0x0A);
	// ����
	p.write(0);
	// ���b�Z�[�W
	p.write(20);
	/*
		0	=	�Ȃ�
		2	=	�Ȃ�
		4	=	�Ȃ�
		7-13=	�Ȃ�
		15	=	���Ԍo�߂Ŏ����ޏꂳ��܂����B�ē��ꂪ�s�\�ł��B(�t���}�����֎����I�ɔ�΂����@�\)
		16-36	�Ȃ�

		�c�Ƌ���
		1	=	�����ł̓I�[�v���o���܂���B(�o�X���̏ꏊ)
		3	=	���X�����Ă��܂�(�X)
		5	=	�����ޏꂳ��܂����B(�Ǖ�)
		6	=	�������Ԃ��o�߂��A���X���J�����Ƃ��ł��܂��񂵂�(�ꏊ���h�~�̋@�\)
		14	=	�i���͔���؂�ł��B(����؂ꂽ�ꍇ�̋����X)

		�ٗp���l
		17	=	�C�x���g���ɋ󂫂��Ȃ��ƃA�C�e���̓X�g�A�[�o���NNPC�̃v���h���b�N�̂Ƃ���ŒT���ׂ��ł��B�X���܂����H
		18	=	�c�Ǝ��Ԃ��߂��ĕX���܂��B
		20	=	(���b�Z�[�W�_�C�A���O�Ȃ��ŕ���)

		�ٗp���l���u�Ǘ��@
		19	=	�}�b�v���ړ�����A���u�Ǘ��@�g�p���ؒf����܂����B���΂炭�A��ɂ܂����p���������B
	*/
	c.DebugPacket(p.getPacket());
}

// �l���X�̃��b�Z�[�W (���v���C���[���_)
function ShoppingClose(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// ���鏈��
	p.write(0x0A);
	// ����
	p.write(1);
	// ���b�Z�[�W
	p.write(10);
	/*
		0	=	???
		4	=	???
		10
		11
		16
		21

		�c�Ƌ���
		1	=	�����ł̓I�[�v���o���܂���B
		3	=	���X�����Ă��܂��B
		5	=	�����ޏꂳ��܂����B
		6	=	�������Ԃ��o�߂��A���X���J�������ł��܂��񂵂��B
		14	=	�i���͔���؂�ł��B
		15	=	���Ԓ��߂Ŏ����ޏꂳ��܂����B�ē��ꂪ�s�\�ł��B
		~27		�Ȃ�

		�ٗp���l
		6	=	�������Ԃ��o�߂��A���X���J�������ł��܂��񂵂��B
		17	=	���X�̎�l�����i�������ł������܂��B�������΂炭��ł����p���������B
		18	=	�c�Ǝ��Ԃ��߂��ĕX���܂��B
		19	=	�}�b�v���ړ�����A���u�Ǘ��@�g�p���ؒf����܂����B���΂炭�A��ɂ܂����p���������B
		20	=	(���b�Z�[�W�_�C�A���O�Ȃ��ŕ���)
		~29		�Ȃ�

		����
		2	=	���肪�������������܂����B
		7	=	�������I���܂����B���ʂ��m�F���Ă��������B
		8	=	�����Ɏ��s���܂����B
		9	=	�P�̂ݏ����\�ȃA�C�e���������Č����Ɏ��s���܂����B
		12	=	���肪�ʂ̃}�b�v�ɂ���׌����ł��܂���B
		13	=	�Q�[���t�@�C������������A�C�e��������ł��܂���B�Q�[���Đݒu�������x�����Ă��������B

		�Q�[��(�_�o����)
		0	=	��������ޏꂵ�܂����B
		2	=	�g�[�i�����g���I���܂����B10�b��Ɏ����I�Ƀ��[����������܂��B(�`���b�g)
		3	=	�����������܂���
		4	=	��������ޏꂵ�܂����B
		5	=	�����ޏꂳ��܂����B
	*/
	c.DebugPacket(p.getPacket());
}

// �Q�[��
function Gaming(c) {
	var p = c.getOutPacket();
	// �����n����
	p.writeShort(0x015F);
	// �Ȃ�炩?
	p.write(0x3D);
	p.writeInt(1);
	p.writeInt(1);
	p.writeInt(2);
	/*
		0x37	���v���C���[��READY!!���
		0x38	���v���C���[��READY!!��Ԃ��L�����Z��
		0x39
		0x3A	�v���C���[�̃^�[��(�Ԙg)
		0x3B	YOU WIN(0), DRAW(1)

	*/
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// �Q�[��
function AvaTrade(c) {
	var p = c.getOutPacket();
	p.writeShort(0x015F);
	p.write(2);
	p.write(6);
	/*
		3	=	����
		6	=	�|�C���g����
	*/
	p.writeMapleAsciiString("�����~�gX");
	p.writeInt(1);
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

function UpdateTama(c) {
	var p = c.getOutPacket();
	p.writeShort(0x0025);
	p.write(15);
	p.writeInt(7777);
	c.DebugPacket(p.getPacket());
}

// �C�ӂ̃e�L�X�g�̕\��
function ChatMessage(c) {
	for (var i = 0; i <= 0x1A; i++) {
		var p = c.getOutPacket();
		p.writeShort(0x00FB);
		p.writeShort(i);
		p.writeMapleAsciiString("�����~�g : ���b�Z�[�W");
		p.writeZeroBytes(100);
		c.DebugPacket(p.getPacket());
	}
}


function AttackDamageMotion(c) {
	var p = c.getOutPacket();
	p.writeShort(0x00FE);
	p.writeInt(0);
	p.writeInt(0);
	p.writeInt(0);
	p.writeInt(1); // ������є���
	p.writeInt(9999); // ��_���[�W
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

function ClosedPortal(c) {
	var p = c.getOutPacket();
	p.writeShort(0x0135);

	/*
		0	�|�[�^�����J���܂���ł����B
		1	����ɂ�[]���K�v�ł��B
		2	�����s���̗��R�œ���ł��܂���B
	*/
	p.write(1);
	p.writeInt(2000005); // 1 �̏ꍇ�ɃA�C�e�������\�������
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// �}�b�v�ޏꃁ�b�Z�[�W
function BossAfter(c) {
	var p = c.getOutPacket();
	p.writeShort(0x014F);
	/*
		0	�}�b�v�������܂����B or X���ȓ��ɏo�����̃����X�^�[��|���Ȃ��ƃ}�b�v����ޏꂵ�܂��B
		1	�{�X�����X�^�[�ގ���A�}�b�v�ޏ�܂Ŏc��X���ł��B
	*/
	p.write(0);
	p.writeInt(33); // �c�莞��
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// /MapleTV GM�R�}���h��exploit���p�����ꍇ�ɃT�[�o�[����Ԃ��Ă���p�P�b�g�Ɠ���
function MapleTVErrorMessage(c) {
	var p = c.getOutPacket();
	p.writeShort(0x018F);
	/*
		0�ȊO	�G���[���b�Z�[�W����
	*/
	p.write(1);
	/*
		1	Non-GM character tried to send GM message.
		2	You entered wrong user name.
		3	You have to wait for more than 1 Hour now. Please use it later.
	*/
	p.write(1);
	c.DebugPacket(p.getPacket());
}

// �����I��UI���J��
function OpenUI(c) {
	var p = c.getOutPacket();
	p.writeShort(0x00EC);
	/*
		0x01	����
		0x02	�X�e�[�^�X
		0x03	�X�L��
		0x05	�L�[�ݒ�
		0x06	�N�G�X�g
		0x09	�����X�^�[�u�b�N
		0x0A	�L�����N�^�[���
		0x11	�N���b�V��
		0x15	�O���[�v�T��
		0x16	���[�J�[
		0x19	�}�C�����L���O Web�u���E�U
		0x1A	�t�@�~���[�X�L��
		0x1A	�t�@�~���[�ƌn�}
		0x1C	GM Story Board Web�u���E�U
		0x1D	�^�p�҂���莆���͂��܂����B(�E�[�ɃA�C�R���o��)
		0x1E	�M��
		0x1F	���C�v���C�x���g @010D 00�����M�����
		0x20	�G���@���̃X�L��
		0x22	�`���b�g
		0x23	�N���b�V��
	*/
	p.write(0x29);
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// �}�b�v�ړ��֘A�̃G���[���b�Z�[�W
function MapMoveMessage(c) {
	/*
		0x01	�����A�|�[�^���������Ă��܂��B
		0x02	���̑嗤�ւ̏u�Ԉړ��͕s�\�ł��B
		0x03	�n�̋C�^�ɎՂ��ċ߂Â��邱�Ƃ��ł��܂���B
		0x04	�e���|�[�g�ł��Ȃ��ꏊ�ł��B(�_�C�A���O)
		0x05	�n�̋C�^�ɎՂ��ċ߂Â��邱�Ƃ��ł��܂���B
		0x06	�O���[�v�����o�[�̂ݓ��ꂷ�邱�Ƃ��ł���}�b�v�ł��B
		0x07	�����������o�[�̂ݓ���ł���}�b�v�ł��B
	*/
	for (var i = 1; i <= 7; i++) {
		var p = c.getOutPacket();
		p.writeShort(0x0084);
		p.write(i);
		c.DebugPacket(p.getPacket());
	}
}

// �D�F�̕�����
function GrayMessage(c) {
	var p = c.getOutPacket();
	p.writeShort(0x007B);
	p.writeInt(0); // �s��
	p.writeMapleAsciiString("Maple"); // ������
	c.DebugPacket(p.getPacket());
}

// �v���[���g
function GiftTest(c) {
	var p = c.getOutPacket();
	p.writeShort(0x004F);

	/*
		0x01	�v���[���g�����܂����B(�ʒm)
		0x03	�A�C�e���C���x���g���̏���ɋ󂫂��Ȃ����߃v���[���g���n���܂���B
	*/
	p.write(0x01);
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

// �p�`���R��� (UI�̋ʂ��X�V�����)
function PachiUpdate(c) {
	var p = c.getOutPacket();
	p.writeShort(0x004C);
	p.writeInt(0);
	p.writeInt(8787); // ��
	// buffer��decode���Ă���̂Ńt�H�[�}�b�g�s��
	p.writeZeroBytes(100);
	c.DebugPacket(p.getPacket());
}

function Reported(c) {
	var p = c.InPacket(0x002A);
	/*
		0x02	��t����
		0x03	�\������܂����B

		0x41	���΂炭�������x�s���Ă��������B
		0x42	�L�����N�^�[�����m�F���Ă��������x�s���Ă��������B
		0x43	�\���ɕK�v�Ȏ萔���̃���������܂���B
		0x44	�T�[�o�ɐڑ��ł��܂���B
		0x45	�\���\�񐔂𒴉߂��܂����B
		0x46	X������ X���܂Ő\���\�ł��B
		0x47	���U�\���Ő��ق���\���ł��܂���B
	*/
	p.Encode1(0x40);
	p.Encode4(0);
	p.Encode4(0);

	// 0����
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	p.Encode4(0);
	// ���M
	c.ProcessPacket(p.Get());
}

// test
// �x�K Encode1 (0x40, 0x41, 0x43)
function ViciousHammer(c) {
	var pp = c.InPacket(0x0192);
	pp.Encode1(0x3A);
	// ���g�p?
	pp.Encode4(0);
	// 2-X�Ŏc���
	pp.Encode4(2);
	c.ProcessPacket(pp.Get());

	var p = c.InPacket(0x0192);
	p.Encode1(0x38); // 0x38, 0x39, 0x3A
	p.Encode4(1);
	c.ProcessPacket(p.Get());
}

function VegaScroll(c) {
	var pp = c.InPacket(0x0196);
	// 3C or 3E
	pp.Encode1(0x3E);
	c.ProcessPacket(pp.Get());
	var p = c.InPacket(0x0196);
	// 3B = ����? ,40 = ���s?
	p.Encode1(0x3B);
	c.ProcessPacket(p.Get());
}

function TestPacket(c) {
	var pp = c.InPacket(0x0196);
	// 3C or 3E
	pp.Encode1(0x3E);
	c.ProcessPacket(pp.Get());
	var p = c.InPacket(0x0196);
	// 3B = ����? ,40 = ���s?
	p.Encode1(0x3B);
	c.ProcessPacket(p.Get());

}

/*
function TestPacket(c) {
	var p = c.InPacket(0x00F4);
	c.ProcessPacket(p.Get());
}
*/

// �L����ID 0x00007DBC

// Java����Ă΂��
function debug(c) {
	TestPacket(c);
}