import {Injectable} from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


// @ts-ignore
// pdfMake.fonts = {
//   timesNewRoman: {
//     normal: 'times-new-roman-regular.ttf',
//     bold: 'times-new-roman-bold.ttf',
//     italics: 'times-new-roman-italic.ttf',
//     bolditalics: 'times-new-roman-italic-bold.ttf'
//   },
//
// };
// pdfFonts.pdfMake.vfs = {
//   ...TIMES_NEW_ROMAN_VFS,
// };

@Injectable({
  providedIn: 'root'
})
export class Pr2GhodadraPdfService {
  dd = {}

  generatePdf() {
    this.dd = {
      content: [
        {
          italics: true,
          alignment: 'center',
          stack: [
            {
              //font: 'timesNewRoman',
              text: 'CALIFORNIA BACK AND PAIN SPECIALISTS',
              fontSize: 20
            },

            {
              canvas: [{
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 520,
                y2: 0,
                lineWidth: 1
              }]
            },

            {
              text: 'HISTORY AND PHYSICAL/FOLLOW UP CONSULTATION',
              fontSize: 12,
              bold: true
            },
          ]
        },

        {
          italics: true,
          fontSize: 12,
          marginTop: 10,
          bold: true,
          stack: [
            {
              layout: 'lightHorizontalLines',
              margin: [38, 0, 0, 0],
              table: {
                widths: [255, '*', 100, '*'],
                body: [
                  [{
                    text: 'Simple text',
                    fontSize: 11,
                    marginBottom: -3,
                  }],

                  [{
                    margin: [-38, -15, 0, 0],
                    text: 'NAME:',
                  }]
                ],
              }
            },

            {
              layout: 'lightHorizontalLines',
              margin: [408, -19, 0, 0],
              table: {
                widths: [100, '*', 100, '*'],
                body: [
                  [{
                    text: 'Simple text',
                    fontSize: 11,
                    marginBottom: -3,
                  }],

                  [{
                    margin: [-95, -15, 0, 0],
                    text: 'LAST VISIT DATE:'
                  }]
                ],
              }
            },

            {
              layout: 'lightHorizontalLines',
              margin: [88, -2, 0, 0],
              table: {
                widths: [100, '*', 100, '*'],
                body: [
                  [{
                    text: 'Simple text',
                    fontSize: 11,
                    marginBottom: -3,
                  }],

                  [{
                    margin: [-88, -15, 0, 0],
                    text: 'DATE OF BIRTH:',
                  }]
                ],
              }
            },

            {
              layout: 'lightHorizontalLines',
              margin: [408, -19, 0, 0],
              table: {
                widths: [100, '*', 100, '*'],
                body: [
                  [{
                    text: ' ',
                    fontSize: 11,
                    marginBottom: -3,
                  }],

                  [{
                    margin: [-94, -15, 0, 0],
                    text: '',
                  }]
                ],
              }
            },

            {
              layout: 'lightHorizontalLines',
              margin: [83, -2, 0, 0],
              table: {
                widths: [210, '*', 100, '*'],
                body: [
                  [{
                    text: 'Simple text',
                    fontSize: 11,
                    marginBottom: -3,
                  }],

                  [{
                    margin: [-83, -15, 0, 0],
                    text: 'TODAY’S DATE:',
                  }]
                ],
              }
            },

            {
              fontSize: 10,
              marginTop: 5,
              stack: [
                {
                  marginTop: 3,
                  text: 'Current History:'
                },

                {
                  stack: [
                    {
                      margin: [73, -9, 0, 0],
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [87, -9, 0, 0],
                      text: 'No Interval Change '
                    }
                  ]
                },

                {
                  margin: [85, 0, 0, 0],
                  stack: [
                    {
                      margin: [90, -9, 0, 0],
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [103, -9, 0, 0],
                      text: 'Flare-up of Pain  '
                    }
                  ]
                },

                {
                  margin: [173, 0, 0, 0],
                  stack: [
                    {
                      margin: [90, -9, 0, 0],
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [105, -9, 0, 0],
                      text: 'Persistent pain'
                    }
                  ]
                },

                {
                  margin: [-87, 9, 0, 0],
                  stack: [
                    {
                      margin: [87, -9, 0, 0],
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [100, -9, 0, 0],
                      text: 'Questionnaire Reviewed & Discussed '
                    }
                  ]
                },

                {
                  margin: [90, 0, 0, 0],
                  stack: [
                    {
                      margin: [90, -9, 0, 0],
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [103, -9, 0, 0],
                      text: 'Questionnaire Reviewed & Discussed '
                    }
                  ]
                },
              ]
            },
          ]
        },
        {
          marginTop: 13,
          stack: [
            {
              canvas: [{
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 520,
                y2: 0,
                lineWidth: 1
              }]
            },

            {
              marginTop: 15,
              canvas: [{
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 520,
                y2: 0,
                lineWidth: 1
              }]
            },

            {
              marginTop: 15,
              canvas: [{
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 520,
                y2: 0,
                lineWidth: 1
              }]
            },
          ]
        },


        {
          style: 'defaultText',
          marginTop: 13,
          stack: [
            {
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  margin: [15, -9, 0, 0],
                  text: 'Current Medications Use & Their Side Effects Discussed'
                }
              ]
            },

            {
              marginTop: 2,
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  margin: [15, -9, 0, 0],
                  text: 'Alternative Treatments Discussed',
                }
              ]
            },

            {
              marginTop: 13,
              text: 'REVIEW OF SYSTEMS:',
            },

            {
              margin: [103, -10, 0, 0],
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  margin: [14, -9, 0, 0],
                  text: 'No Interval Change ',
                }
              ]
            },

            {
              margin: [205, -10, 0, 0],
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  margin: [14, -9, 0, 0],
                  text: 'Negative',
                }
              ]
            },

            {
              margin: [263, -10, 0, 0],
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  layout: 'lightHorizontalLines',
                  margin: [63, -12, 0, 0],
                  table: {
                    widths: [185, '*', 100, '*'],
                    body: [
                      [{
                        text: 'Some text',
                        fontSize: 10,
                        marginBottom: -3,
                      }],

                      [{
                        margin: [-50, -12, 0, 0],
                        text: 'History of: ',
                      }]
                    ],
                  }
                },

                {
                  margin: [0, 10, 0, 13],
                  stack: [
                    {
                      canvas: [{
                        type: 'line',
                        x1: -263,
                        y1: 0,
                        x2: 256,
                        y2: 0,
                        lineWidth: 1
                      }]
                    }
                  ]
                },
              ]
            },

            {
              stack: [
                {
                  text: 'CURRENT MEDICATIONS:',
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 0,
                    y1: 0,
                    x2: 110,
                    y2: 0,
                    lineWidth: 1
                  }]
                },

                {
                  margin: [117, -10, 0, 0],
                  stack: [
                    {
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [12, -9, 0, 0],
                      text: 'See List ',
                    }
                  ]
                },

                {
                  margin: [170, -10, 0, 0],
                  stack: [
                    {
                      canvas: [
                        {
                          type: 'polyline',
                          lineWidth: 0.5,
                          closePath: true,
                          points: [
                            {x: 0, y: 0},
                            {x: 7, y: 0},
                            {x: 7, y: 7},
                            {x: 0, y: 7}
                          ]
                        }
                      ],
                    },

                    {
                      margin: [12, -9, 0, 0],
                      text: 'Non-Complaint with Pain Management Agreement',
                    }
                  ]
                },
              ]
            }
          ]
        },

        {
          style: 'defaultText',
          marginTop: 12,
          stack: [
            {
              stack: [
                {
                  marginBottom: 2,
                  text: '1.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },

            {
              marginTop: 4,
              stack: [
                {
                  marginBottom: 2,
                  text: '2.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },

            {
              marginTop: 4,
              stack: [
                {
                  marginBottom: 2,
                  text: '3.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },
          ]
        },

        {
          style: 'defaultText',
          margin: [240, -42, 0, 0],
          stack: [
            {
              stack: [
                {
                  marginBottom: 2,
                  text: '4.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },

            {
              marginTop: 4,
              stack: [
                {
                  marginBottom: 2,
                  text: '5.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },
            {
              marginTop: 4,
              stack: [
                {
                  marginBottom: 2,
                  text: '6.'
                },

                {
                  margin: [13, -13, 0, 0],
                  text: 'some text'
                },

                {
                  margin: [177, -13, 0, 0],
                  text: '(#\t\t\t  )'
                },

                {
                  canvas: [{
                    type: 'line',
                    x1: 13,
                    y1: 0,
                    x2: 175,
                    y2: 0,
                    lineWidth: 1
                  }]
                },
              ]
            },
          ]
        },

        {
          style: 'defaultText',
          marginTop: 3,
          stack: [
            {
              text: 'Allergies',
            },

            {
              canvas: [{
                type: 'line',
                x1: 0,
                y1: 0,
                x2: 40,
                y2: 0,
                lineWidth: 1
              }]
            },

            {
              margin: [45, -8, 0, 0],
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  margin: [12, -9, 0, 0],
                  text: 'NKDA  ',
                }
              ]
            },

            {
              margin: [87, -10, 0, 0],
              stack: [
                {
                  canvas: [
                    {
                      type: 'polyline',
                      lineWidth: 0.5,
                      closePath: true,
                      points: [
                        {x: 0, y: 0},
                        {x: 7, y: 0},
                        {x: 7, y: 7},
                        {x: 0, y: 7}
                      ]
                    }
                  ],
                },

                {
                  stack: [
                    {
                      margin: [13, -10, 0, 0],
                      text: 'Allergic to:'
                    },

                    {
                      margin: [63, -12, 0, 0],
                      text: 'some text'
                    },

                    {
                      canvas: [{
                        type: 'line',
                        x1: 63,
                        y1: 0,
                        x2: 432,
                        y2: 0,
                        lineWidth: 1
                      }]
                    },
                  ]
                },
              ]
            },
          ]
        }
      ],

      styles: {
        defaultText: {
          fontSize: 10,
          bold: true,
          italics: true
        }
      }
    }

    // @ts-ignore
    pdfMake.createPdf(this.dd).open()
  }

}
