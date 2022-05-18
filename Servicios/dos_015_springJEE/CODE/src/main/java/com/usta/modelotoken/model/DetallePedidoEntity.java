package com.usta.modelotoken.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "detalle_pedido")

public class DetallePedidoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalle_pedido")
    private long idDetallePedido;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "total_pedido")
    private int totalPedido;

    @JoinColumn(name = "id_pedido", referencedColumnName = "id_pedido")
    @ManyToOne(fetch = FetchType.EAGER)
    private PedidoEntity idPedidoFK;

    public DetallePedidoEntity(){

    }

    public DetallePedidoEntity(long idDetallePedido, String direccion, int totalPedido, PedidoEntity idPedidoFK) {
        this.idDetallePedido = idDetallePedido;
        this.direccion = direccion;
        this.totalPedido = totalPedido;
        this.idPedidoFK = idPedidoFK;
    }

    public long getIdDetallePedido() {        return idDetallePedido;    }
    public void setIdDetallePedido(long idDetallePedido) {        this.idDetallePedido = idDetallePedido;    }

    public String getDireccion() {        return direccion;    }
    public void setDireccion(String direccion) {        this.direccion = direccion;    }

    public int getTotalPedido() {        return totalPedido;    }
    public void setTotalPedido(int totalPedido) {        this.totalPedido = totalPedido;    }

    public PedidoEntity getIdPedidoFK() {        return idPedidoFK;    }
    public void setIdPedidoFK(PedidoEntity idPedidoFK) {        this.idPedidoFK = idPedidoFK;    }
}
