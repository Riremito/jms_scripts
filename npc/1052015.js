// �r��@�l�b�g�J�t�F
// �p�P�b�g�f�o�b�O

// �_���[�W�G�t�F�N�g
function DoSomething_00AD() {
	var p = cm.getOutPacket();
	// header
	p.writeShort(0x00AD);

	// data
	p.writeInt(0x00007DBC); // �����~�g
	p.writeInt(-1); // �_���[�W
	p.writeZeroBytes(100);
	// ProcessPacket
	cm.DebugPacket(p.getPacket());
}

// test
function DoSomething_CID() {
	var p = cm.getOutPacket();
	// header
	p.writeShort(0x00B2);

	// data
	p.writeInt(0x00007DBC); // �����~�g
	p.writeInt(0);
	//p.writeShort(1);
	//p.writeShort(0);
	p.writeZeroBytes(100);
	// ProcessPacket
	cm.DebugPacket(p.getPacket());
}

// do
function DoSomething_3F() {
	var p = cm.getOutPacket();
	// header
	p.writeShort(0x003F);

	// data
	//p.write(0x07);
	//p.writeMapleAsciiString("�����~�g" + " : " + "NAYN!");
	//p.writeMapleAsciiString("�����~�g");
	//p.writeInt(1472117);
	//p.writeInt(1);
	//p.writeInt(0x00007DBC);
	//p.writeZeroBytes(100);
	// ProcessPacket
	cm.DebugPacket(p.getPacket());
}
function DoSomething() {
	var p = cm.getOutPacket();
	// header
	p.writeShort(0x015F);
	p.write(0x0A);
	p.write(10);
	p.write(1);
	cm.DebugPacket(p.getPacket());
}

function action(mode, type, selection) {
	DoSomething();
	cm.dispose();
}