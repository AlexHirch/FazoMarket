import React, { useState } from "react";
import RangeSlider from "./buttons/Sliderinput";
import AccordionUsage from "./accordion/accordionph";
import { Checkbox, FormControlLabel } from "@mui/material";
import { red } from "@mui/material/colors";
import { dark } from "@mui/material/styles/createPalette";
import { Button } from ".";

const Filter = () => {
  const [filterOn, setFilterOn] = useState(false);
  const [value, setValue] = React.useState([1, 103000000]);
  const [width1, setWidth1] = useState(window.innerWidth);

  const filterVisibleHanle = () => {
    setFilterOn(!filterOn);
  };
  return (
    <>
      {width1 <= 720 ? (
        <div className="div-filter">
          <button
            onClick={() => filterVisibleHanle()}
            className={filterOn ? "btn-filter active" : "btn-filter"}
          >
            {filterOn ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-filter"></i>
            )}
          </button>
        </div>
      ) : (
        <>
          <div className="Filter" style={{ padding: 10 }}>
            <AccordionUsage
              title={<p>Цена (cум)</p>}
              body={
                <form className="formsFilter">
                  <span className="inputs">
                    <input type="number" placeholder={`От ${value[0]}`} />
                    <input type="number" placeholder={`До ${value[1]}`} />
                  </span>
                  <RangeSlider value={value} setValue={setValue} />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Наличие</p>}
              body={
                <form className="border">
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label="Забрать сегодня"
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Бренд</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={
                      <p>
                        LG <span>(30)</span>
                      </p>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={
                      <p>
                        Samsung <span>(30)</span>
                      </p>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={
                      <p>
                        Artel <span>(7)</span>
                      </p>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={
                      <p>
                        Huawei <span>(30)</span>
                      </p>
                    }
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Емкость аккумулятора</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>1821 мА⋅ч</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>3000 мА⋅ч</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>4500 мА⋅ч</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>5000 мА⋅ч</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Страна производитель</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Вьетнам</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Китай</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Artel </p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Huawei</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Количество ядер</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>1</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>2</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>4</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>8</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Фронтальная камера</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>8 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>12 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>24 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>32 Mpx</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Фотокамера</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>12 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>48 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>50 Mpx</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>64 Mpx</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Версия ОС</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Android 10</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Android 11</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Android 12</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Android 13</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Разъем для наушников</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>В наличии</p>}
                  />
                </form>
              }
            />
            <AccordionUsage
              title={<p>Разъем для наушников</p>}
              body={
                <form>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Сверху слева</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Сверху справа</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Снизу слева</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: dark[900],
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                      />
                    }
                    label={<p>Снизу справа</p>}
                  />
                </form>
              }
            />
            <Button width={"100"} value={"Показать"} color={"red"} />
          </div>
        </>
      )}
      {filterOn ? (
        <div className="Filter" style={{ padding: 10 }}>
          <AccordionUsage
            title={<p>Цена (cум)</p>}
            body={
              <form className="formsFilter">
                <span className="inputs">
                  <input type="number" placeholder={`От ${value[0]}`} />
                  <input type="number" placeholder={`До ${value[1]}`} />
                </span>
                <RangeSlider value={value} setValue={setValue} />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Наличие</p>}
            body={
              <form className="border">
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label="Забрать сегодня"
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Бренд</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={
                    <p>
                      LG <span>(30)</span>
                    </p>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={
                    <p>
                      Samsung <span>(30)</span>
                    </p>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={
                    <p>
                      Artel <span>(7)</span>
                    </p>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={
                    <p>
                      Huawei <span>(30)</span>
                    </p>
                  }
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Емкость аккумулятора</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>1821 мА⋅ч</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>3000 мА⋅ч</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>4500 мА⋅ч</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>5000 мА⋅ч</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Страна производитель</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Вьетнам</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Китай</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Artel </p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Huawei</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Количество ядер</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>1</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>2</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>4</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>8</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Фронтальная камера</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>8 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>12 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>24 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>32 Mpx</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Фотокамера</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>12 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>48 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>50 Mpx</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>64 Mpx</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Версия ОС</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Android 10</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Android 11</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Android 12</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Android 13</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Разъем для наушников</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>В наличии</p>}
                />
              </form>
            }
          />
          <AccordionUsage
            title={<p>Разъем для наушников</p>}
            body={
              <form>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Сверху слева</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Сверху справа</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Снизу слева</p>}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: dark[900],
                        "&.Mui-checked": {
                          color: red[500],
                        },
                      }}
                    />
                  }
                  label={<p>Снизу справа</p>}
                />
              </form>
            }
          />
          <Button width={"100"} value={"Показать"} color={"red"} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Filter;
