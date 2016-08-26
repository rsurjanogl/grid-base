"use strict";
var GridCore = (function () {
    function GridCore(config) {
        if (config === void 0) { config = {}; }
        this.config = config;
        // TODO implement UUID
        this.id = '12345';
    }
    // Lifecycle init
    // this.events.onInit();
    // Lifecycle created
    // Lifecycle beforeCompile
    // Lifecycle compiled
    // Lifecycle ready
    // Lifecycle attached
    // Lifecycle detached
    // Lifecycle beforeDestroy
    // Lifecycle destroyed
    GridCore.prototype.init = function () {
    };
    return GridCore;
}());
exports.GridCore = GridCore;
//# sourceMappingURL=/gridCore.js.map