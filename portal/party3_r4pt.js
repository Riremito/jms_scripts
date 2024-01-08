function enter(pi) {
 try {
    var em = pi.getEventManager("OrbisPQ");
/*    if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
    if (pi.getPortal().getId() >= 3 && pi.getPortal().getId() <= 8) {
        pi.instantwarp(pi.getMapId(), 8);
    } else if (pi.getPortal().getId() >= 9 && pi.getPortal().getId() <= 20) {
        pi.instantwarp(pi.getMapId(), 9);
    }
        } else {*/
            pi.instantwarp(pi.getMapId(), 9);
//        }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}