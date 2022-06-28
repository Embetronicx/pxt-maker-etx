namespace pxsim.visuals {
    mkBoardView = (opts: BoardViewOptions): BoardView => {
        return new visuals.RpiPicoBoardSvg({
            runtime: runtime,
            theme: visuals.randomTheme(),
            wireframe: opts.wireframe
        });
    }
}