function enter(pi) {
	pi.playPortalSE();
	var return_mapid = pi.getSavedLocation("MULUNG_TC");
	pi.clearSavedLocation("MULUNG_TC");

	switch (return_mapid) {
		// ���f�B�u���A�� �p�`���R������
		case 810000000:
			pi.warp(return_mapid, "in00");
			break;
		// �V���[�����ʂ�
		case 801000300:
			pi.warp(return_mapid, "in00");
			break;
		default:
			pi.warp(return_mapid);
			break;
	}

}