// ���C�v���t�@�~���[�X�^�W�I�B�e�`�P�b�g
// ����}�b�v�ɖ߂��K�v����
function enter(pi) {
	pi.playPortalSE();
	var return_mapid = pi.getSavedLocation("MULUNG_TC");
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(return_mapid);
}