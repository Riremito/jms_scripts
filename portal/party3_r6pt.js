function enter(pi) {
 try {
    var em = pi.getEventManager("OrbisPQ");
    if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1")) {
    if (pi.getPortal().getId() >= 24 && pi.getPortal().getId() <= 27) {
        pi.instantwarp(pi.getMapId(), 6);
    } else if (pi.getPortal().getId() >= 28 && pi.getPortal().getId() <= 31) {
        pi.instantwarp(pi.getMapId(), 7);
    } else if (pi.getPortal().getId() >= 32 && pi.getPortal().getId() <= 35) { // 8
        pi.instantwarp(pi.getMapId(), 8);
    } else if (pi.getPortal().getId() >= 36 && pi.getPortal().getId() <= 39) { // 9
        pi.instantwarp(pi.getMapId(), 9);
    } else if (pi.getPortal().getId() >= 40 && pi.getPortal().getId() <= 43) { // 10
        pi.instantwarp(pi.getMapId(), 10);
    } else if (pi.getPortal().getId() >= 44 && pi.getPortal().getId() <= 47) { // 10
        pi.instantwarp(pi.getMapId(), 11);
    } else if (pi.getPortal().getId() >= 48 && pi.getPortal().getId() <= 51) { // 10
        pi.instantwarp(pi.getMapId(), 12);
    } else if (pi.getPortal().getId() >= 52 && pi.getPortal().getId() <= 55) { // 10
        pi.instantwarp(pi.getMapId(), 13);
    } else if (pi.getPortal().getId() >= 56 && pi.getPortal().getId() <= 59) { // 10
        pi.instantwarp(pi.getMapId(), 14);
    } else if (pi.getPortal().getId() >= 60 && pi.getPortal().getId() <= 63) { // 10
        pi.instantwarp(pi.getMapId(), 15);
    } else if (pi.getPortal().getId() >= 64 && pi.getPortal().getId() <= 67) { // 10
        pi.instantwarp(pi.getMapId(), 16);
    } else if (pi.getPortal().getId() >= 68 && pi.getPortal().getId() <= 71) { // 10
        pi.instantwarp(pi.getMapId(), 17);
    } else if (pi.getPortal().getId() >= 72 && pi.getPortal().getId() <= 75) { // 10
        pi.instantwarp(pi.getMapId(), 18);
    } else if (pi.getPortal().getId() >= 76 && pi.getPortal().getId() <= 79) { // 10
        pi.instantwarp(pi.getMapId(), 19);
    } else if (pi.getPortal().getId() >= 80 && pi.getPortal().getId() <= 83) { // 10
        pi.instantwarp(pi.getMapId(), 20);
    } else if (pi.getPortal().getId() >= 84 && pi.getPortal().getId() <= 87) { // 10
        pi.instantwarp(pi.getMapId(), 21);
    }
        } else {
            pi.instantwarp(pi.getMapId(), 22);
        }
 } catch (e) {
    pi.getPlayer().dropMessage(5, "Error: " + e);
 }
}