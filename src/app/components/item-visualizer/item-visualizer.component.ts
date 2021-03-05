import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
} from '@angular/core';

import ColorScheme from 'color-scheme';

import * as paper from 'paper';

const scheme = new ColorScheme();

scheme
  .from_hue(0) // Start the scheme
  .scheme('triade') // Use the 'tetrade' scheme, that is, colors
  // selected from 4 points equidistant around
  // the color wheel.
  .variation('hard'); // Use the 'soft' color variation

const colors = scheme.colors();

@Component({
  selector: 'app-item-visualizer',
  templateUrl: './item-visualizer.component.html',
  styleUrls: ['./item-visualizer.component.scss'],
})
export class ItemVisualizerComponent implements AfterViewInit {
  @Input() itemId;

  @ViewChild('paperCanvas')
  paperCanvas: ElementRef<HTMLCanvasElement>;

  public context: CanvasRenderingContext2D;

  private scope: any;

  ngAfterViewInit(): void {
    this.scope = new paper.PaperScope();
    this.scope.setup(this.paperCanvas.nativeElement);
    this.scope.activate();

    var scope = this.scope;
    const rndColor = () =>
      '#' + colors[Math.round(Math.random() * colors.length)] + 'ff';
    const colorAt = (ndx) => '#' + colors[ndx % colors.length] + 'ff';

    var centerSides = 3 + Math.round(Math.random() * 9);
    var centerDiameter = 400 + Math.round(Math.random() * 500);
    var canvasWidth = this.paperCanvas.nativeElement.clientWidth;
    var canvasHeight = this.paperCanvas.nativeElement.clientHeight;
    var centerPoint = new scope.Point(canvasWidth / 2, canvasHeight / 2);

    const drawFlowerIter = (iter, max) => {
      var petalSides = 3 + Math.round(Math.random() * 9);
      var petalDiameter = 400 + Math.round(Math.random() * 500);
      var centerColor = rndColor();
      var petalColor = rndColor();
      var backShapeColor = rndColor();

      if (this.itemType === 1) {
        centerSides = 3;
        centerDiameter = 600;
        petalSides = 3;
        petalDiameter = 600;
        petalColor = '#ff00ffff';
        centerColor = '#00ff00ff';
        backShapeColor = '#000000ff';
      }
      if (this.itemType === 2) {
        centerSides = 5;
        centerDiameter = 600;
        petalSides = 5;
        petalDiameter = 500;
        petalColor = '#ffff00ff';
        centerColor = '#0000ffff';
        backShapeColor = '#000000ff';
      }
      if (this.itemType === 3) {
        petalColor = colorAt(
          parseInt(
            '0x' +
              this.itemId.substring(
                this.itemId.length - 1 - iter,
                this.itemId.length - iter
              )
          )
        );
        centerColor = colorAt(
          parseInt(
            '0x' +
              this.itemId.substring(
                this.itemId.length - 2 - iter,
                this.itemId.length - 1 - iter
              )
          )
        );
        backShapeColor = colorAt(
          parseInt(
            '0x' +
              this.itemId.substring(
                this.itemId.length - 3 - iter,
                this.itemId.length - 2 - iter
              )
          )
        );
        centerSides = parseInt(
          '0x' +
            this.itemId.substring(
              this.itemId.length - 4 - iter,
              this.itemId.length - 3 - iter
            )
        );
        petalSides = parseInt(
          '0x' +
            this.itemId.substring(
              this.itemId.length - 5 - iter,
              this.itemId.length - 4 - iter
            )
        );
        centerDiameter = parseInt(
          '0x' +
            this.itemId.substring(
              this.itemId.length - 7 - iter,
              this.itemId.length - 5 - iter
            )
        );
        petalDiameter = parseInt(
          '0x' +
            this.itemId.substring(
              this.itemId.length - 9 - iter,
              this.itemId.length - 7 - iter
            )
        );
      }
      // console.log('petalColor', petalColor);
      // console.log('centerColor', centerColor);
      // console.log('backShapeColor', backShapeColor);
      // console.log('centerSides', centerSides);
      // console.log('petalSides', petalSides);
      // console.log('centerDiameter', centerDiameter);
      // console.log('petalDiameter', petalDiameter);

      if (iter === 1) {
        var backShape = new scope.Path.RegularPolygon(
          centerPoint,
          centerSides,
          petalDiameter + centerDiameter
        );
        backShape.fillColor = new scope.Color(backShapeColor);
      }

      const scale = iter;
      var centerPath = new scope.Path.RegularPolygon(
        centerPoint,
        petalSides,
        centerDiameter / scale
      );
      centerPath.fillColor = new scope.Color(petalColor);
      centerPath.strokeColor = new scope.Color(petalColor);
      centerPath.strokeWidth = 6 / scale;
      centerPath.blendMode = 'xor';
      centerPath.segments.forEach((segment) => {
        var polygon = new scope.Path.RegularPolygon(
          new scope.Point(segment.point.x, segment.point.y),
          petalSides,
          petalDiameter / scale
        );
        polygon.fillColor = new scope.Color(centerColor);
        polygon.strokeWidth = 60 / scale;
        polygon.blendMode = 'xor';
      });
      if (iter < max) {
        drawFlowerIter(iter + 1, max);
      }
    };

    drawFlowerIter(1, 4);

    scope.project.activeLayer.fitBounds(scope.view.bounds);
  }

  get itemType() {
    if (this.itemId < 3) return 0;
    if (this.itemId >= 256 && this.itemId <= 256 + 256) return 1; // relic
    if (this.itemId >= 4096 && this.itemId <= 4096 + 256) return 2; // powerup
    if (this.itemId > 4096 + 256) return 3; //gem
  }
}
