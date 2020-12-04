/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2018 - 2020 Codenjoy
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */
class Solver {
  constructor(DIRECTIONS, ELEMENTS) {
    this.directions = DIRECTIONS;
    this.elements = ELEMENTS;
    this.actions = [];
  }

  /**
   * 
   * @param {string} direction value of this.directions
   * @param {number} count actions count
   * @example `addActionStep(this.directions.RIGHT, 3)` will add 'RIGHT, RIGHT, RIGHT' to the result
  */

  addActionStep(direction, count = 1) {
    this.actions = [...this.actions, ...Array(count).fill(direction)];
  }

  /**
    * @return string with action steps divided by comma with space
  */
  
  get(board) {
    // TODO your code here
    // let x = 0;
    // let y = 0;
    // let moveStep;
    const middlePoint = [8, 0];
    const emptyElem = '.';
    let rowXY = Array.from(Array(18), () => new Array(2));

    let currentPosition = board.getCurrentFigurePosition();
    let currentFigure = board.getCurrentFigureType();
    console.log(currentFigure);

    // for (let i = 0; i < 18; i++) {
    //   if (board.)
    // }
    function chekRowX(array, yPos) {

      let count = 0;

      for (let i = 0; i < array.length; i++) {
          array[i][0] = count++;
          array[i][1] = yPos;
      }

      return array;
    }

    rowXY = chekRowX(rowXY, 0);
    console.log(rowXY);

    for (let i = 0; i < rowXY.length; i++) {
      if (rowXY[i][0] < middlePoint[0]) {

        if (board.getAt(rowXY[i][0], rowXY[i][1]) === emptyElem) {
          if (currentFigure === 'I') {
            if (board.getAt(rowXY[i][0] + 3, rowXY[i][1]) === emptyElem) {
              this.addActionStep(this.directions.ROTATE_90, 1);
              this.addActionStep(this.directions.LEFT, Math.abs(8 - rowXY[i][0] - 2));
            } else {
              this.addActionStep(this.directions.LEFT, Math.abs(8 - rowXY[i][0]));
            }
            // if (board.isNear(rowXY[i][0], rowXY[i][1], this.elements.YELLOW) || board.isNear(rowXY[i][0], rowXY[i][1], this.elements.BLUE)) {
            //   this.addActionStep(this.directions.ROTATE_90, 0);

            // } else {
            //   this.addActionStep(this.directions.ROTATE_90, 1);
            //   this.addActionStep(this.directions.LEFT, Math.abs(8 - rowXY[i][0] - 2));
            // }
            this.addActionStep(this.directions.DOWN, 1);
          } else if (currentFigure === 'O') {
            this.addActionStep(this.directions.LEFT, Math.abs(8 - rowXY[i][0]));
            this.addActionStep(this.directions.DOWN, 1);
          }
          break;
        }
      }
      else if (rowXY[i][0] === middlePoint[0] && board.getAt(rowXY[i][0], rowXY[i][1]) === emptyElem) { // Если на мидл поинте
        this.addActionStep(this.directions.DOWN, 1);
        break;
      }
      else if (rowXY[i][0] > middlePoint[0]) {

        if (board.getAt(rowXY[i][0], rowXY[i][1]) === emptyElem) {
          if (currentFigure === 'I') {
            if (rowXY[i][0] + 4 <= 17) {
              if (board.getAt(rowXY[i][0] + 3, rowXY[i][1]) === emptyElem) {
                this.addActionStep(this.directions.ROTATE_90, 1);
                this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0] - 2));
              } else {
                this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0]));
              }
            } else {
               this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0]));
            }
            // if (board.isNear(rowXY[i][0], rowXY[i][1], this.elements.YELLOW) || board.isNear(rowXY[i][0], rowXY[i][1], this.elements.BLUE)) {
            //   this.addActionStep(this.directions.ROTATE_90, 0);
            //   this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0] - 2));
            // } else {
            //   this.addActionStep(this.directions.ROTATE_90, 1);
            //   this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0]));
            // }
            // this.addActionStep(this.directions.ROTATE_90, 1);
            this.addActionStep(this.directions.DOWN, 1);
          } else if (currentFigure === 'O') {
            this.addActionStep(this.directions.RIGHT, Math.abs(8 - rowXY[i][0]));
            this.addActionStep(this.directions.DOWN, 1);
          }
          break;
        }
      } else {
        continue;
      }
    }

    // for (let i = 0; i < rowXY; i++) {
    //   if (board.isAt(rowXY[i]))
    // }

    // for (let i = 0; i < 18; i++) {
    //   for (let j = 0; j < 18; j++) {
    //       if (board.getAt(x, y) != emptyElem) {
    //         y++;
    //       } else {
    //         break;
    //       }
    //     }

    //   if (board.getAt(x, y) === emptyElem) {
    //     this.addActionStep(this.directions.LEFT, currentPosition[0]);
    //     break;
    //   } else {
    //     x++;
    //   }
    //   y = 0;
    //   console.log(x, y);
    // }

    // for ()
    // let freeSpace = Object.values(board.getFreeSpace());
    // let sizeEelemnt = Object.values(board.predictCurrentFigurePoints());
    // let allSize = Array.from(Object.entries(board.getAllExtended()));
    // console.log(freeSpace[0].toString());
    // sizeEelemnt = sizeEelemnt[0].toString();
    // console.log(sizeEelemnt[0].toString());

    // console.log(freeSpace[0].toString() == `[${x}, ${y}]`);
    // // console.log(board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW));
    // for (let i = 0; i < freeSpace.length; i++) {
    //   // console.log(freeSpace[i].toString());
    //   console.log(freeSpace[i].toString() == `[${x}, ${y}]`);
    //   if (freeSpace[i].toString() == '[x, y]') {
    //     this.addActionStep(this.directions.DOWN, 2);
    //     break;
    //   }
    // }


    // for (let i = 0; i < board.size(); i++) {
      // for (let j = 0; j < board.size(); j++) {
      //   // if (board.getAt(x, y) === emptyElem) {          
      //     if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
      //       // this.addActionStep(this.directions.DOWN, 1);
      //       this.addActionStep(this.directions. RIGHT, 2);
      //       if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
      //         // this.addActionStep(this.directions.DOWN, 1);
      //         this.addActionStep(this.directions. RIGHT, 2);
      //         break;
      //       }
      //       break;
      //     } else if {        // }
      //       this.addActionStep(this.directions.LEFT, 2);
      //       break;
      //     }

      //     // for (let k = 0; k < sizeEelemnt.length; k++) {
      //     //   if ()
      //     // }
      //   // } else if (board.getAt(x, y) != emptyElem)  {
      //     if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
      //       // this.addActionStep(this.directions.DOWN, 1);
      //       this.addActionStep(this.directions. LEFT, 2);
      //       break;
      //     } else {
      //       this.addActionStep(this.directions.RIGHT, 2);
      //       x++;
      //       break;
      //     }
      // let randomSide = Math.random();

      // for (let i = 0; i < board.size(); i++) {  // x
      //   for (let j = 0; j < board.size(); i++) {  // y
      //     if (board.getAt(x , y) != emptyElem) {
      //       y += 2;
      //     } else if (y > 8){
      //       this.addActionStep(this.directions.LEFT, j);
      //       break;
      //     }
      //   }
      //}
        // if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
        //   // this.addActionStep(this.directions.DOWN, 1);
        //   if (board.getAt(currentPosition[0] + 2, currentPosition[1] + 2) === emptyElem) {
        //     this.addActionStep(this.directions.LEFT, 2);
        //   } else if (board.getAt(currentPosition[0] + 2, currentPosition[1] + 2) != emptyElem) {
        //     this.addActionStep(this.directions.RIGHT, 2)
        //   }
        // } else if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === false) {
        //   if (randomSide > 0.5) {
        //     this.addActionStep(this.directions.LEFT, 2);
        //   } else if (randomSide < 0.5) {
        //     this.addActionStep(this.directions.RIGHT, 2);
        //   }
        // }

        // console.log(x, y);
        // console.log(Math.random());
    //   if (board.getAt(x, y) === emptyElem) {
    //     if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
    //       this.addActionStep(this.directions. RIGHT, 2);
    //       break;
    //     }
    //     this.addActionStep(this.directions.LEFT, 2);
    //     break;
    //   } else if (board.getAt(x, y) != emptyElem) {
    //     if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true) {
    //       this.addActionStep(this.directions. LEFT, 2);
    //       break;
    //     }
    //     this.addActionStep(this.directions.RIGHT, 2);
    //     y++;
    //     break;
    //   }
    // }
    // freeSpace = freeSpace.toString();

    // let arrayObj = Object.entries(currentPosition);
    // console.log(freeSpace[1].toString());
    // console.log(freeSpace.toString());

    // if (board.isNear(currentPosition[0], this.elements.YELLOW)) {
    //   this.addActionStep(this.directions.LEFT, 2);
    //   this.addActionStep(this.directions.DOWN, 1);
    // }
      // if (currentFigure === 'O'){
      //   if (board.getAt(8, 0) != emptyElem) {

      //     this.addActionStep(this.directions.RIGHT, 8);
      //     this.addActionStep(this.directions.DOWN, 1);
      //   } else {
          
      //     this.addActionStep(this.directions.LEFT, 8);
      //     this.addActionStep(this.directions.DOWN, 1); 
          
      //   }
      // }
      // if (currentFigure === 'I') {
      //   if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW) === true || board.isNear(currentPosition[0], currentPosition[1], this.elements.BLUE)){
      //     this.addActionStep(this.directions.RIGHT, 2);
      //     // this.addActionStep(this.directions.DOWN, 1);
      //   } else {
      //     this.addActionStep(this.directions.RIGHT, 8); 
      //     this.addActionStep(this.directions.act, 1);
      //     // this.addActionStep(this.directions.DOWN, 1);
      //   }
        // if(board.getAt(9, 0) != emptyElem){
        //   // this.addActionStep(this.directions.RIGHT, 8);
        //   // console.log(board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW));
        //   // if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW === false)){
        //   //   this.addActionStep(this.directions.LEFT, 1);
        //   // } else if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW === true)) {
        //   //   this.addActionStep(this.directions.DOWN, 1);
        //   // } 
        //   if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW  === false || currentPosition[0], currentPosition[1], this.elements.BLUE) === false){
        //     this.addActionStep(this.directions.RIGHT, 2);
        //   }
        // } else {
        //   if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW  === false || currentPosition[0], currentPosition[1], this.elements.BLUE) === false){
        //     this.addActionStep(this.directions.RIGHT, 8);
        //     //this.addActionStep(this.directions.DOWN, 1);
        //   }
        //   // console.log(board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW));
        //   // this.addActionStep(this.directions.LEFT, 8);
        //   // if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW === false)){
        //   //   this.addActionStep(this.directions.LEFT, 1);
        //   //   this.addActionStep(this.directions.DOWN, 1);
        //   // }
        //   // if (board.isNear())
        //   // } else if (board.isNear(currentPosition[0], currentPosition[1], this.elements.YELLOW === true)) {
        //   //   this.addActionStep(this.directions.DOWN, 1);
        //   // }
        //   }
        // }

    // console.log(currentPosition);
    // console.log(board.predictCurrentFigurePoints(this.elements).toString());



    // console.log(currentPosition[0] + "");
    
    console.log(currentPosition[0]);
    return this.actions.join(', ');
  }
}