import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_7_118}>
        <View style={styles.View_7_119} />
        <View style={styles.View_7_120}>
          <Text style={styles.Text_7_120}>
            © 2021 company name. All rights reserved
          </Text>
        </View>
        <View style={styles.View_7_121}>
          <View style={styles.View_7_122}>
            <Text style={styles.Text_7_122}>FAQ</Text>
          </View>
          <View style={styles.View_7_123}>
            <Text style={styles.Text_7_123}>Terms &amp; Conditions</Text>
          </View>
          <View style={styles.View_7_124}>
            <Text style={styles.Text_7_124}>License</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_160}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f5b/515a/964250c24ef61dda2a933447c0361e1e"
          }}
          style={styles.ImageBackground_13_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70eb/c874/35538a63168770e13053160ba115cc26"
          }}
          style={styles.ImageBackground_13_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e7f/1993/3bb9ca3eda3e2e2a9b47a16c173c441d"
          }}
          style={styles.ImageBackground_13_121}
        />
        <View style={styles.View_13_159}>
          <Text style={styles.Text_13_159}>
            Follow us to get the latest news related to our products
          </Text>
        </View>
        <View style={styles.View_13_120}>
          <Text style={styles.Text_13_120}>Never miss a thing</Text>
        </View>
      </View>
      <View style={styles.View_13_118}>
        <View style={styles.View_13_8} />
        <View style={styles.View_13_10} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efc0/dea6/8f034a4c368bdd816e661ce676cfe5fb"
          }}
          style={styles.ImageBackground_13_50}
        />
        <View style={styles.View_13_33}>
          <View style={styles.View_13_7} />
          <View style={styles.View_13_31}>
            <View style={styles.View_13_20}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_21}
              />
            </View>
            <View style={styles.View_13_24}>
              <Text style={styles.Text_13_24}>Service 1</Text>
            </View>
          </View>
          <View style={styles.View_13_32}>
            <View style={styles.View_13_25}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_26}
              />
            </View>
            <View style={styles.View_13_28}>
              <Text style={styles.Text_13_28}>Service 2</Text>
            </View>
          </View>
          <View style={styles.View_13_30}>
            <View style={styles.View_13_15}>
              <Text style={styles.Text_13_15}>$7</Text>
            </View>
            <View style={styles.View_13_16}>
              <Text style={styles.Text_13_16}>99</Text>
            </View>
          </View>
          <View style={styles.View_13_14}>
            <Text style={styles.Text_13_14}>Basic</Text>
          </View>
        </View>
        <View style={styles.View_13_79}>
          <View style={styles.View_13_6} />
          <View style={styles.View_13_81}>
            <View style={styles.View_13_82}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_83}
              />
            </View>
            <View style={styles.View_13_85}>
              <Text style={styles.Text_13_85}>Service 1</Text>
            </View>
          </View>
          <View style={styles.View_13_86}>
            <View style={styles.View_13_87}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_88}
              />
            </View>
            <View style={styles.View_13_90}>
              <Text style={styles.Text_13_90}>Service 2</Text>
            </View>
          </View>
          <View style={styles.View_13_91}>
            <View style={styles.View_13_92}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_93}
              />
            </View>
            <View style={styles.View_13_95}>
              <Text style={styles.Text_13_95}>Service 3</Text>
            </View>
          </View>
          <View style={styles.View_13_75}>
            <View style={styles.View_13_77}>
              <Text style={styles.Text_13_77}>99</Text>
            </View>
            <View style={styles.View_13_76}>
              <Text style={styles.Text_13_76}>$12</Text>
            </View>
          </View>
          <View style={styles.View_13_78}>
            <Text style={styles.Text_13_78}>Advanced</Text>
          </View>
        </View>
        <View style={styles.View_13_116}>
          <View style={styles.View_13_3} />
          <View style={styles.View_13_96}>
            <View style={styles.View_13_97}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_98}
              />
            </View>
            <View style={styles.View_13_100}>
              <Text style={styles.Text_13_100}>Service 1</Text>
            </View>
          </View>
          <View style={styles.View_13_101}>
            <View style={styles.View_13_102}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_103}
              />
            </View>
            <View style={styles.View_13_105}>
              <Text style={styles.Text_13_105}>Service 2</Text>
            </View>
          </View>
          <View style={styles.View_13_106}>
            <View style={styles.View_13_107}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/6a46/4b4583b1ef6a2b2918ad557397bb822b"
                }}
                style={styles.ImageBackground_13_108}
              />
            </View>
            <View style={styles.View_13_110}>
              <Text style={styles.Text_13_110}>Service 3</Text>
            </View>
          </View>
          <View style={styles.View_13_111}>
            <View style={styles.View_13_112}>
              <Text style={styles.Text_13_112}>99</Text>
            </View>
            <View style={styles.View_13_113}>
              <Text style={styles.Text_13_113}>$19</Text>
            </View>
          </View>
          <View style={styles.View_13_114}>
            <Text style={styles.Text_13_114}>Premium</Text>
          </View>
        </View>
        <View style={styles.View_13_2}>
          <Text style={styles.Text_13_2}>Pricing options</Text>
        </View>
      </View>
      <View style={styles.View_12_130}>
        <View style={styles.View_12_100}>
          <Text style={styles.Text_12_100}>
            Faucibus tellus id justo, risus turpis vel mauris id. Purus sed
            consectetur quam pulvinar nibh nunc. Tellus a donec ac ut morbi
            netus nulla nunc commodo. Arcu laoreet lacus velit vestibulum sit
            fermentum feugiat aliquet vitae. Neque, vulputate sem at ornare
            nibh. Augue egestas viverra aliquam sed ullamcorper quam facilisis.
            Nunc nunc lectus non libero dignissim sociis lobortis accumsan.
          </Text>
        </View>
        <View style={styles.View_11_2}>
          <Text style={styles.Text_11_2}>A few words about us</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d8/3d9c/8952f93716acab8b19d850579d6713ef"
          }}
          style={styles.ImageBackground_12_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de38/fe79/68b3c02217d76287d071bb8c531b262d"
          }}
          style={styles.ImageBackground_12_129}
        />
      </View>
      <View style={styles.View_6_82}>
        <View style={styles.View_6_0} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27b/a674/522bf60e003538fd0a62f08abcc439e9"
          }}
          style={styles.ImageBackground_6_70}
        />
        <View style={styles.View_6_81}>
          <View style={styles.View_7_104}>
            <Text style={styles.Text_7_104}>Learn more</Text>
          </View>
          <View style={styles.View_7_103}>
            <View style={styles.View_7_97} />
            <View style={styles.View_7_99}>
              <Text style={styles.Text_7_99}>Get started</Text>
            </View>
          </View>
          <View style={styles.View_6_46}>
            <Text style={styles.Text_6_46}>
              Faucibus ullamcorper a integer nulla
            </Text>
          </View>
          <View style={styles.View_6_38}>
            <Text style={styles.Text_6_38}>Lorem ipsum dolor sit amet.</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_7_44}>
        <View style={styles.View_7_43}>
          <View style={styles.View_6_88} />
          <View style={styles.View_7_39}>
            <View style={styles.View_7_40}>
              <Text style={styles.Text_7_40}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_7_41}>
              <Text style={styles.Text_7_41}>
                Eu fermentum maecenas ultrices fusce
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d514/3357/cbc8ba6fd78a216c62e21f1aa4044ad7"
            }}
            style={styles.ImageBackground_7_114}
          />
        </View>
        <View style={styles.View_7_42}>
          <View style={styles.View_6_87} />
          <View style={styles.View_7_36}>
            <View style={styles.View_7_37}>
              <Text style={styles.Text_7_37}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_7_38}>
              <Text style={styles.Text_7_38}>
                Eu fermentum maecenas ultrices fusce
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0277/45aa/6f38614c96c9984b49d7fa2191eaca63"
            }}
            style={styles.ImageBackground_7_111}
          />
        </View>
        <View style={styles.View_7_35}>
          <View style={styles.View_6_85} />
          <View style={styles.View_7_31}>
            <View style={styles.View_7_32}>
              <Text style={styles.Text_7_32}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_7_33}>
              <Text style={styles.Text_7_33}>In tempor pharetra orci</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41ac/1a00/52bc3b53a063aeca24d0b7d207a5899c"
            }}
            style={styles.ImageBackground_7_115}
          />
        </View>
        <View style={styles.View_7_34}>
          <View style={styles.View_6_84} />
          <View style={styles.View_7_28}>
            <View style={styles.View_7_29}>
              <Text style={styles.Text_7_29}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_7_30}>
              <Text style={styles.Text_7_30}>In tempor pharetra orci</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9249/bbb2/2f2e580551e672fe6cdd5cc350cd6856"
            }}
            style={styles.ImageBackground_7_112}
          />
        </View>
        <View style={styles.View_7_27}>
          <View style={styles.View_6_83} />
          <View style={styles.View_7_26}>
            <View style={styles.View_7_19}>
              <Text style={styles.Text_7_19}>Lorem ipsum</Text>
            </View>
            <View style={styles.View_7_23}>
              <Text style={styles.Text_7_23}>In tempor pharetra orci</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8891/493c/7e4ed57740d0e598770d90de7db52481"
            }}
            style={styles.ImageBackground_7_113}
          />
        </View>
      </View>
      <View style={styles.View_6_19}>
        <View style={styles.View_6_18}>
          <View style={styles.View_6_12}>
            <Text style={styles.Text_6_12}>Contact</Text>
          </View>
          <View style={styles.View_6_11}>
            <Text style={styles.Text_6_11}>Services</Text>
          </View>
          <View style={styles.View_6_7}>
            <Text style={styles.Text_6_7}>About</Text>
          </View>
          <View style={styles.View_7_107}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36bc/cf51/1ac719e8416e474b896606e7b49beca1"
              }}
              style={styles.ImageBackground_7_106}
            />
            <View style={styles.View_6_72}>
              <Text style={styles.Text_6_72}>Home</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_6_2}>
          <Text style={styles.Text_6_2}>Logo</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_7_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("461.2021857923497%")
  },
  View_7_119: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_7_120: {
    width: wp("26.52777777777778%"),
    minWidth: wp("26.52777777777778%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.083333333333336%"),
    top: hp("5.327868852459005%")
  },
  Text_7_120: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_121: {
    width: wp("26.805555555555554%"),
    minWidth: wp("26.805555555555554%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86111111111111%"),
    top: hp("5.327868852459005%")
  },
  View_7_122: {
    width: wp("2.569444444444444%"),
    minWidth: wp("2.569444444444444%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.111111111111114%"),
    top: hp("0%")
  },
  Text_7_122: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_123: {
    width: wp("12.291666666666666%"),
    minWidth: wp("12.291666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_7_123: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_124: {
    width: wp("4.861111111111112%"),
    minWidth: wp("4.861111111111112%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.944444444444443%"),
    top: hp("0%")
  },
  Text_7_124: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_160: {
    width: wp("57.43055555555555%"),
    minWidth: wp("57.43055555555555%"),
    height: hp("42.07650273224044%"),
    minHeight: hp("42.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.38888888888889%"),
    top: hp("390.1639344262295%")
  },
  ImageBackground_13_142: {
    width: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    top: hp("28.415300546448066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.486111111111114%")
  },
  ImageBackground_13_125: {
    width: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    top: hp("28.415300546448066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.13888888888889%")
  },
  ImageBackground_13_121: {
    width: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    top: hp("28.415300546448066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_13_159: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.86111111111111%"),
    top: hp("11.065573770491824%")
  },
  Text_13_159: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_120: {
    width: wp("25.972222222222225%"),
    minWidth: wp("25.972222222222225%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.625000000000004%"),
    top: hp("0%")
  },
  Text_13_120: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("81.69398907103826%"),
    minHeight: hp("81.69398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("288.5245901639344%")
  },
  View_13_8: {
    width: wp("51.041666666666664%"),
    minWidth: wp("51.041666666666664%"),
    height: hp("71.44808743169399%"),
    minHeight: hp("71.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_13_10: {
    width: wp("48.95833333333333%"),
    minWidth: wp("48.95833333333333%"),
    height: hp("77.04918032786885%"),
    minHeight: hp("77.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.041666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)"
  },
  ImageBackground_13_50: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.25%"),
    top: hp("14.890710382513646%")
  },
  View_13_33: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.44444444444444%"),
    top: hp("37.97814207650271%")
  },
  View_13_7: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_13_31: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    top: hp("27.73224043715851%")
  },
  View_13_20: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_21: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12740671960381178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016954210082076315%")
  },
  View_13_24: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6388888888888857%"),
    top: hp("0%")
  },
  Text_13_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_32: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5416666666666714%"),
    top: hp("32.923497267759615%")
  },
  View_13_25: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_26: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12740671960381178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016954210082076315%")
  },
  View_13_28: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6388888888888857%"),
    top: hp("0%")
  },
  Text_13_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_30: {
    width: wp("5.902777777777778%"),
    minWidth: wp("5.902777777777778%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.5%"),
    top: hp("15.163934426229503%")
  },
  View_13_15: {
    width: wp("4.027777777777778%"),
    minWidth: wp("4.027777777777778%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_15: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_16: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.305555555555557%"),
    top: hp("1.3661202185792831%")
  },
  Text_13_16: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_14: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.777777777777786%"),
    top: hp("4.644808743169449%")
  },
  Text_13_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_79: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.58333333333333%"),
    top: hp("27.732240437158453%")
  },
  View_13_6: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_13_81: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("27.86885245901641%")
  },
  View_13_82: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_83: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12739004333161574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001695421006786546%")
  },
  View_13_85: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888893%"),
    top: hp("0%")
  },
  Text_13_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_86: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("32.51366120218586%")
  },
  View_13_87: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_88: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12739004333161574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001695421006786546%")
  },
  View_13_90: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888893%"),
    top: hp("0%")
  },
  Text_13_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_91: {
    width: wp("7.013888888888889%"),
    minWidth: wp("7.013888888888889%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.055555555555557%"),
    top: hp("37.15846994535519%")
  },
  View_13_92: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_93: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12740671960386862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00001695421006786546%")
  },
  View_13_95: {
    width: wp("4.375%"),
    minWidth: wp("4.375%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888893%"),
    top: hp("0%")
  },
  Text_13_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_75: {
    width: wp("7.777777777777778%"),
    minWidth: wp("7.777777777777778%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.527777777777786%"),
    top: hp("15.027322404371603%")
  },
  View_13_77: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%"),
    top: hp("1.7759562841530396%")
  },
  Text_13_77: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_76: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_76: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_78: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.416666666666671%"),
    top: hp("5.601092896174862%")
  },
  Text_13_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_116: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.375%"),
    top: hp("18.852459016393425%")
  },
  View_13_3: {
    width: wp("20.833333333333336%"),
    minWidth: wp("20.833333333333336%"),
    height: hp("43.71584699453552%"),
    minHeight: hp("43.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 170, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_13_96: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.402777777777777%"),
    top: hp("26.092896174863426%")
  },
  View_13_97: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_98: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12739004333161574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016954210069641817%")
  },
  View_13_100: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888891%"),
    top: hp("0%")
  },
  Text_13_100: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_101: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.402777777777777%"),
    top: hp("30.73770491803282%")
  },
  View_13_102: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_103: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.12739004333161574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016954210069641817%")
  },
  View_13_105: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888891%"),
    top: hp("0%")
  },
  Text_13_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_106: {
    width: wp("7.152777777777778%"),
    minWidth: wp("7.152777777777778%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.402777777777777%"),
    top: hp("35.38251366120221%")
  },
  View_13_107: {
    width: wp("1.0416666666666665%"),
    minWidth: wp("1.0416666666666665%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_108: {
    width: wp("1.0419699218538072%"),
    height: hp("1.6354838355642851%"),
    top: hp("0.1273900433316726%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000016954210069641817%")
  },
  View_13_110: {
    width: wp("4.513888888888888%"),
    minWidth: wp("4.513888888888888%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.638888888888891%"),
    top: hp("0%")
  },
  Text_13_110: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_111: {
    width: wp("7.847222222222222%"),
    minWidth: wp("7.847222222222222%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.458333333333332%"),
    top: hp("13.38797814207652%")
  },
  View_13_112: {
    width: wp("1.597222222222222%"),
    minWidth: wp("1.597222222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("1.639344262295083%")
  },
  Text_13_112: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_113: {
    width: wp("5.972222222222222%"),
    minWidth: wp("5.972222222222222%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_13_113: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_114: {
    width: wp("9.583333333333334%"),
    minWidth: wp("9.583333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.625%"),
    top: hp("3.825136612021879%")
  },
  Text_13_114: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_2: {
    width: wp("20.90277777777778%"),
    minWidth: wp("20.90277777777778%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("3.142076502732209%")
  },
  Text_13_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_12_130: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("75.68306010928961%"),
    minHeight: hp("75.68306010928961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("198.224043715847%")
  },
  View_12_100: {
    width: wp("70.13888888888889%"),
    minWidth: wp("70.13888888888889%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.930555555555555%"),
    top: hp("27.185792349726768%")
  },
  Text_12_100: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 20,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_2: {
    width: wp("29.72222222222222%"),
    minWidth: wp("29.72222222222222%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.208333333333336%"),
    top: hp("11.065573770491795%")
  },
  Text_11_2: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_12_122: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3.278690348557436%"),
    minHeight: hp("3.278690348557436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.27777777777779%"),
    top: hp("64.89071038251367%")
  },
  ImageBackground_12_129: {
    width: wp("2.7777777777777777%"),
    minWidth: wp("2.7777777777777777%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222221%"),
    top: hp("11.748633879781408%")
  },
  View_6_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101.22950819672131%"),
    minHeight: hp("101.22950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101.09289617486338%"),
    minHeight: hp("101.09289617486338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 170, 255, 1)"
  },
  ImageBackground_6_70: {
    width: wp("68.95833333333333%"),
    minWidth: wp("68.95833333333333%"),
    height: hp("61.47540983606557%"),
    minHeight: hp("61.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.041666666666668%"),
    top: hp("39.75409836065574%")
  },
  View_6_81: {
    width: wp("58.611111111111114%"),
    minWidth: wp("58.611111111111114%"),
    height: hp("39.89071038251366%"),
    minHeight: hp("39.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.652777777777779%"),
    top: hp("29.6448087431694%")
  },
  View_7_104: {
    width: wp("9.444444444444445%"),
    minWidth: wp("9.444444444444445%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.416666666666664%"),
    top: hp("30.73770491803279%")
  },
  Text_7_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_103: {
    width: wp("15.972222222222221%"),
    minWidth: wp("15.972222222222221%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: hp("29.234972677595636%")
  },
  View_7_97: {
    width: wp("15.972222222222221%"),
    minWidth: wp("15.972222222222221%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_7_99: {
    width: wp("9.166666666666666%"),
    minWidth: wp("9.166666666666666%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.402777777777777%"),
    top: hp("1.5027322404371546%")
  },
  Text_7_99: {
    color: "rgba(8, 109, 245, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_46: {
    width: wp("30.486111111111114%"),
    minWidth: wp("30.486111111111114%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06944444444444464%"),
    top: hp("16.803278688524593%")
  },
  Text_6_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_38: {
    width: wp("58.611111111111114%"),
    minWidth: wp("58.611111111111114%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316955%")
  },
  Text_6_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 48,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_44: {
    width: wp("80.55555555555556%"),
    minWidth: wp("80.55555555555556%"),
    height: hp("87.8415300546448%"),
    minHeight: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("95.21857923497268%")
  },
  View_7_43: {
    width: wp("39.23611111111111%"),
    minWidth: wp("39.23611111111111%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.31944444444444%"),
    top: hp("46.85792349726776%")
  },
  View_6_88: {
    width: wp("39.23611111111111%"),
    minWidth: wp("39.23611111111111%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_39: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.875000000000007%"),
    top: hp("22.404371584699447%")
  },
  View_7_40: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("0%")
  },
  Text_7_40: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_41: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%")
  },
  Text_7_41: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_114: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.180555555555564%"),
    top: hp("3.4153005464480657%"),
    resizeMode: "cover"
  },
  View_7_42: {
    width: wp("39.23611111111111%"),
    minWidth: wp("39.23611111111111%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.85792349726776%")
  },
  View_6_87: {
    width: wp("39.23611111111111%"),
    minWidth: wp("39.23611111111111%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_36: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("22.404371584699447%")
  },
  View_7_37: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("0%")
  },
  Text_7_37: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_38: {
    width: wp("25.34722222222222%"),
    minWidth: wp("25.34722222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%")
  },
  Text_7_38: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_111: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.111111111111114%"),
    top: hp("3.4153005464480657%"),
    resizeMode: "cover"
  },
  View_7_35: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.13888888888889%"),
    top: hp("0%")
  },
  View_6_85: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_31: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8611111111111%"),
    top: hp("22.13114754098359%")
  },
  View_7_32: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555713%"),
    top: hp("0%")
  },
  Text_7_32: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_33: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907114%")
  },
  Text_7_33: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_115: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.236111111111114%"),
    top: hp("4.098360655737707%"),
    resizeMode: "cover"
  },
  View_7_34: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.569444444444443%"),
    top: hp("0%")
  },
  View_6_84: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_28: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111114%"),
    top: hp("22.13114754098359%")
  },
  View_7_29: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555571%"),
    top: hp("0%")
  },
  Text_7_29: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_30: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907114%")
  },
  Text_7_30: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_112: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.236111111111114%"),
    top: hp("4.098360655737707%"),
    resizeMode: "cover"
  },
  View_7_27: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_6_83: {
    width: wp("25.416666666666664%"),
    minWidth: wp("25.416666666666664%"),
    height: hp("41.66666666666667%"),
    minHeight: hp("41.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_7_26: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111111%"),
    top: hp("22.13114754098359%")
  },
  View_7_19: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1805555555555554%"),
    top: hp("0%")
  },
  Text_7_19: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_23: {
    width: wp("15.347222222222223%"),
    minWidth: wp("15.347222222222223%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907114%")
  },
  Text_7_23: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_113: {
    width: wp("6.944444444444445%"),
    minWidth: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.236111111111109%"),
    top: hp("4.098360655737707%"),
    resizeMode: "cover"
  },
  View_6_19: {
    width: wp("80.90277777777779%"),
    minWidth: wp("80.90277777777779%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.722222222222223%"),
    top: hp("6.830601092896176%")
  },
  View_6_18: {
    width: wp("37.916666666666664%"),
    minWidth: wp("37.916666666666664%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.986111111111114%"),
    top: hp("0.8196721311475406%")
  },
  View_6_12: {
    width: wp("5.277777777777778%"),
    minWidth: wp("5.277777777777778%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.63888888888888%"),
    top: hp("0%")
  },
  Text_6_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_11: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.694444444444436%"),
    top: hp("0%")
  },
  Text_6_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_7: {
    width: wp("4.166666666666666%"),
    minWidth: wp("4.166666666666666%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.347222222222221%"),
    top: hp("0%")
  },
  Text_6_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_107: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_106: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    height: hp("7.04637170470125e-7%"),
    minHeight: hp("7.04637170470125e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595628%")
  },
  View_6_72: {
    width: wp("4.097222222222222%"),
    minWidth: wp("4.097222222222222%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_6_2: {
    width: wp("5.138888888888888%"),
    minWidth: wp("5.138888888888888%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 3476 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
