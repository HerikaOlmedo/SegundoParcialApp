import { ScrollView, Text, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
      }}
      contentContainerStyle={{
        paddingVertical: 20,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#667eea",
          borderRadius: 16,
          padding: 24,
          marginBottom: 24,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#667eea",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16,
            borderWidth: 4,
            borderColor: "#fff",
          }}
        >
          <Text
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HA
          </Text>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            color: "#fff",
            textAlign: "center",
            marginBottom: 4,
          }}
        >
          Hérika Alexandra
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
          }}
        >
          Olmedo Aguilera
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 16,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 3,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#EDE9FE",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ fontSize: 20 }}>📧</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#9CA3AF",
              fontWeight: "600",
              marginBottom: 4,
            }}
          >
            CORREO ELECTRÓNICO
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#111827",
              fontWeight: "500",
            }}
          >
            heriiolmedo@gmail.com
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 12,
          padding: 16,
          marginBottom: 12,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 3,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            backgroundColor: "#DBEAFE",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 12,
          }}
        >
          <Text style={{ fontSize: 20 }}>🎓</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 12,
              color: "#9CA3AF",
              fontWeight: "600",
              marginBottom: 4,
            }}
          >
            CARRERA
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#111827",
              fontWeight: "500",
            }}
          >
            Ingeniería en Informática
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}
