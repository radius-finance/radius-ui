import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import ColorScheme from 'color-scheme';

import * as paper from 'paper';

const scheme = new ColorScheme;

scheme.from_hue(0)         // Start the scheme 
      .scheme('triade')    // Use the 'tetrade' scheme, that is, colors
                            // selected from 4 points equidistant around
                            // the color wheel.
      .variation('hard');   // Use the 'soft' color variation

const colors = scheme.colors();


@Component({
  selector: 'app-item-visualizer', 
  templateUrl: "./item-visualizer.component.html",
  styleUrls: ['./item-visualizer.component.scss']
})
export class ItemVisualizerComponent implements AfterViewInit {

  @ViewChild('paperCanvas')
  paperCanvas: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;

  private scope: any;

  ngAfterViewInit(): void {

    this.scope = new paper.PaperScope();
    this.scope.setup(this.paperCanvas.nativeElement);
    this.scope.activate();

    var scope = this.scope;
    const rndColor = () => '#' + colors[Math.round(Math.random() * colors.length)] + 'ff';

    var centerSides = 3 + Math.round(( Math.random() * 9 ))
    var centerDiameter = 400 + Math.round(( Math.random() * 500 ))
    var canvasWidth = this.paperCanvas.nativeElement.clientWidth
    var canvasHeight = this.paperCanvas.nativeElement.clientHeight
    var centerPoint = new scope.Point(canvasWidth / 2, canvasHeight / 2)

    const drawFlowerIter = (iter, max) => {
      var petalSides = 3 + Math.round(( Math.random() * 9 ))
      var petalDiameter = 400 + Math.round(( Math.random() * 500 ))

      if(iter === 1) {
        var backShape = new scope.Path.RegularPolygon(
          centerPoint,
          centerSides,
          petalDiameter + centerDiameter
        )
        backShape.fillColor =  new scope.Color(rndColor());
      }

      const scale = iter;
      var centerPath = new scope.Path.RegularPolygon(
        centerPoint,
        petalSides,
        centerDiameter / scale
      );
      centerPath.fillColor =  new scope.Color(rndColor());
      centerPath.strokeColor =  new scope.Color(rndColor());
      centerPath.strokeWidth = 6 / scale;
      centerPath.blendMode = 'xor';
      centerPath.segments.forEach((segment) => {
        var polygon = new scope.Path.RegularPolygon(
          new scope.Point(
            segment.point.x,
            segment.point.y
          ),
          petalSides,
          petalDiameter / scale
        );
        polygon.fillColor = new scope.Color(rndColor());
        polygon.strokeWidth = 60 / ( scale);
        //polygon.alpha = 0.6;
        polygon.blendMode = 'xor';
      })
      if(iter < max) {
        drawFlowerIter(iter + 1, max);
      }
    };

    const drawPowerupIter = (iter, max) => {
      var petalSides = 3 + Math.round(( Math.random() * 9 ))
      var petalDiameter = 400 + Math.round(( Math.random() * 500 ))

      if(iter === 1) {
        var backShape = new scope.Path.RegularPolygon(
          centerPoint,
          centerSides,
          petalDiameter + centerDiameter
        )
        //backShape.fillColor =  new scope.Color(rndColor());
      }

      const scale = iter;
      var centerPath = new scope.Path.RegularPolygon(
        centerPoint,
        petalSides,
        centerDiameter / scale
      );
      centerPath.strokeColor =  new scope.Color(rndColor());
      centerPath.strokeWidth = 60 / scale;
      centerPath.blendMode = 'xor';

      centerPath.segments.forEach((segment) => {
        var polygon = new scope.Path.RegularPolygon(
          new scope.Point(
            segment.point.x,
            segment.point.y
          ),
          petalSides,
          petalDiameter / scale
        );
        polygon.strokeColor = new scope.Color(rndColor());
        polygon.strokeWidth = 60 / scale;
        polygon.blendMode = 'xor';
      })
      if(iter < max) {
        drawPowerupIter(iter + 1, max);
      }
    }

    drawFlowerIter(1, 4)

    scope.project.activeLayer.fitBounds(scope.view.bounds);
  }

}
